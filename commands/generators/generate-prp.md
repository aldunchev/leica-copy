# Generate PRP from Requirement

## Requirement file: $ARGUMENTS

Generate a complete PRP (Project Requirements Prompt) for feature implementation with thorough research. This command works with the enhanced requirements and backlog system.

**Input**: Requirements file from `requirements/business/` or `requirements/technical/` directories
**Output**: Production-ready PRP in `PRPs/active/` directory

The AI agent only gets the context you are appending to the PRP and training data. Assume the AI agent has access to the codebase and the same knowledge cutoff as you, so its important that your research findings are included or referenced in the PRP. The Agent has Websearch capabilities, so pass urls to documentation and examples.

## Research Process

1. **Requirement Analysis**
   - Read and understand the requirement file completely
   - Identify requirement type (business/technical)
   - Extract component specifications, Figma links, and constraints
   - Understand business value and success criteria

2. **Codebase Analysis**
   - Search for similar features/patterns in the codebase
   - Identify files to reference in PRP
   - Note existing conventions to follow
   - Check test patterns for validation approach

3. **External Research**
   - Search for similar features/patterns online
   - Library documentation (include specific URLs)
   - Implementation examples (GitHub/StackOverflow/blogs)
   - Best practices and common pitfalls

4. **Backlog Integration**
   - Check current backlog status in `PRPs/backlog/backlog-manager.md`
   - Assess priority using `PRPs/backlog/priority-matrix.md`
   - Identify dependencies and integration points
   - Update backlog with new PRP information

## PRP Generation

Using PRPs/templates/FE_TEMPLATE.md as template:

### Critical Context to Include and pass to the AI agent as part of the PRP
- **Documentation**: URLs with specific sections
- **Code Examples**: Real snippets from codebase
- **Gotchas**: Library quirks, version issues
- **Patterns**: Existing approaches to follow

### Implementation Blueprint
- Start with pseudocode showing approach
- Reference real files for patterns
- Include error handling strategy
- list tasks to be completed to fulfill the PRP in the order they should be completed

### Validation, eslint and tsc for Next JS
```bash
# Syntax/Style
npm run lint

# Test build
npm run build

```

*** CRITICAL AFTER YOU ARE DONE RESEARCHING AND EXPLORING THE CODEBASE BEFORE YOU START WRITING THE PRP ***

*** ULTRATHINK ABOUT THE PRP AND PLAN YOUR APPROACH THEN START WRITING THE PRP ***

## Output: !important

**Dynamic Output Path**: Save as `PRPs/active/[requirement-name]-implementation.md`

**Naming Convention**:
- Extract requirement name from input file
- Add `-implementation` suffix
- Place in `PRPs/active/` directory
- Example: `requirements/business/nav-hero-product-cards.md` → `PRPs/active/nav-hero-product-cards-implementation.md`

**Backlog Update**: After saving PRP, update `PRPs/backlog/backlog-manager.md` with:
- New PRP status and metadata
- Priority assessment
- Timeline estimate
- Dependencies identified

## Quality Checklist
- [ ] All necessary context included
- [ ] Validation gates are executable by AI
- [ ] References existing patterns
- [ ] Clear implementation path
- [ ] Error handling documented

Score the PRP on a scale of 1-10 (confidence level to succeed in one-pass implementation using claude codes)

Remember: The goal is one-pass implementation success through comprehensive context.
