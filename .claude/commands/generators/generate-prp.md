# Generate PRP (Project Requirements Prompt)

Generate a comprehensive Project Requirements Prompt (PRP) from a structured requirement file. This command transforms business or technical requirements into detailed implementation prompts that include context, specifications, and quality assurance measures.

## Usage

```bash
/generators:generate-prp [requirement-file-path]
```

## Arguments

- `requirement-file-path`: Path to the requirement file (e.g., `requirements/business/user-authentication.md`)

## Process

You will:

1. **Analyze the requirement file** to understand the scope, objectives, and success criteria
2. **Research the codebase** to identify existing patterns, components, and architectural decisions
3. **Generate a comprehensive PRP** that includes:
   - Clear implementation objectives
   - Technical specifications
   - Code examples and patterns
   - Integration requirements
   - Quality assurance criteria
   - Success metrics

## PRP Structure

The generated PRP should follow this structure:

```markdown
# [Feature Name] Implementation

## Objective
[Clear statement of what needs to be implemented]

## Requirements Analysis
[Analysis of the original requirement]

## Technical Specifications
[Detailed technical requirements]

## Implementation Plan
[Step-by-step implementation approach]

## Code Examples
[Relevant code patterns and examples]

## Integration Points
[How this integrates with existing systems]

## Quality Assurance
[Testing and validation requirements]

## Success Criteria
[Measurable success metrics]

## Dependencies
[Required dependencies and constraints]
```

## Quality Scoring

After generating the PRP, you will:

1. **Score the PRP quality** (1-10 scale) based on:
   - Completeness of specifications
   - Technical accuracy
   - Implementation clarity
   - Context and examples provided

2. **Update the backlog** with the new PRP and its priority score

## Output Location

- Generated PRPs are saved to: `PRPs/active/[name]-implementation.md`
- Backlog is updated with the new entry
- Quality score is recorded for tracking

## Example

```bash
/generators:generate-prp requirements/business/user-authentication.md
```

This would generate `PRPs/active/user-authentication-implementation.md` with comprehensive implementation details.

## Quality Target

- Target quality score: 8+/10
- All PRPs should include working code examples
- External references must be validated
- Integration points must be clearly defined