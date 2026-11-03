import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  searchSkills,
  validateContactForm,
  sanitizeInput,
  calculateTotalSkillsCount,
  formatProjectTechStack,
} from './portfolio-utils';
import { PROJECTS, SKILL_CATEGORIES } from '../data/portfolio-data';

test('filterProjects returns all projects when category is "all"', () => {
  const result = filterProjects(PROJECTS, 'all');
  assert.equal(result.length, 6);
});

test('filterProjects correctly filters mobile category', () => {
  const result = filterProjects(PROJECTS, 'mobile');
  assert.ok(result.length >= 2);
  result.forEach((p) => {
    assert.equal(p.category, 'mobile');
  });
});

test('filterProjects filters by search query matching title or tech', () => {
  const result = filterProjects(PROJECTS, 'all', 'Flutter');
  assert.ok(result.length >= 3);
  result.forEach((p) => {
    const hasInTech = p.technologies.some((t) => t.toLowerCase().includes('flutter'));
    const hasInTitle = p.title.toLowerCase().includes('flutter');
    const hasInDesc = p.description.toLowerCase().includes('flutter');
    assert.ok(hasInTech || hasInTitle || hasInDesc);
  });
});

test('searchSkills filters skills matching search keyword', () => {
  const result = searchSkills(SKILL_CATEGORIES, 'Flutter');
  assert.ok(result.length > 0);
  const mobileCat = result.find((c) => c.id === 'mobile');
  assert.ok(mobileCat);
  assert.ok(mobileCat.skills.some((s) => s.name === 'Flutter'));
});

test('sanitizeInput strips dangerous HTML angle brackets', () => {
  const raw = '<script>alert("hack")</script>Hello & welcome!';
  const clean = sanitizeInput(raw);
  assert.ok(!clean.includes('<'));
  assert.ok(!clean.includes('>'));
  assert.equal(clean, 'scriptalert("hack")/scriptHello & welcome!');
});

test('validateContactForm passes valid submission', () => {
  const validData = {
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    subject: 'Project Collaboration Opportunity',
    message: 'Hello Gautam, we would love to discuss a Flutter development role at our engineering team.',
  };
  const result = validateContactForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm rejects empty fields or malformed emails', () => {
  const invalidData = {
    name: 'A',
    email: 'not-an-email',
    subject: 'Hi',
    message: 'short',
  };
  const result = validateContactForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('calculateTotalSkillsCount computes aggregate count across categories', () => {
  const count = calculateTotalSkillsCount(SKILL_CATEGORIES);
  assert.ok(count > 15);
});

test('formatProjectTechStack limits visible items and indicates overflow', () => {
  const techs = ['Flutter', 'Dart', 'GPS Tracking', 'QR Scanner', 'REST API', 'Multilingual i18n'];
  const formatted = formatProjectTechStack(techs, 3);
  assert.equal(formatted, 'Flutter · Dart · GPS Tracking (+3 more)');
});
