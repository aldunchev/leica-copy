# Execute PRP Implementation

Execute a Project Requirements Prompt (PRP) with full implementation tracking, quality assurance, and backlog management. This command loads the PRP context and systematically implements the specified requirements.

## Usage

```bash
/workflows:execute-prp [prp-file-path]
```

## Arguments

- `prp-file-path`: Path to the PRP file (e.g., `PRPs/active/user-authentication-implementation.md`)

## Execution Process

You will follow this systematic approach:

### 1. Load PRP Context
- Read and analyze the complete PRP file
- Understand objectives, requirements, and success criteria
- Identify all dependencies and integration points

### 2. Plan Implementation
- Create a detailed implementation plan
- Break down complex tasks into manageable steps
- Identify potential risks and mitigation strategies
- Set up todo tracking for the implementation

### 3. Execute Development
- Follow the PRP specifications exactly
- Implement components following existing codebase patterns
- Use proper TypeScript interfaces and type safety
- Follow design system tokens and conventions
- Implement responsive design patterns

### 4. Quality Validation
- Run all validation commands:
  ```bash
  npm run lint      # Code quality check
  npm run build     # TypeScript compilation
  npm run test      # Unit tests (if available)
  ```
- Verify design system compliance
- Test responsive behavior
- Validate accessibility requirements

### 5. Update Backlog
- Mark PRP as IN_PROGRESS at start
- Update progress throughout implementation
- Mark as COMPLETED when finished
- Move PRP to `PRPs/completed/` directory

## Implementation Standards

### Code Quality
- Follow existing code conventions and patterns
- Use proper TypeScript types and interfaces
- Implement proper error handling
- Add appropriate comments only when necessary

### Design System Compliance
- Use design tokens from `src/app/globals.css`
- Follow Tailwind CSS class naming conventions
- Implement responsive breakpoints correctly
- Maintain design fidelity with Figma specifications

### Integration Requirements
- Ensure proper integration with existing components
- Follow Next.js 15 App Router patterns
- Implement proper React 19 patterns
- Use appropriate React hooks and lifecycle methods

## Success Criteria

The implementation is considered successful when:

1. **All requirements are met** as specified in the PRP
2. **Quality gates pass**: lint, build, and test commands succeed
3. **Design system compliance** is maintained
4. **Responsive behavior** works across all breakpoints
5. **No regressions** are introduced to existing functionality

## Error Handling

If implementation encounters issues:

1. **Document the problem** in the PRP file
2. **Update backlog status** to reflect current state
3. **Create follow-up tasks** for resolution
4. **Maintain traceability** of decisions and changes

## Example

```bash
/workflows:execute-prp PRPs/active/user-authentication-implementation.md
```

This would:
- Load the user authentication PRP
- Plan the implementation approach
- Execute the development work
- Validate the results
- Update the backlog with completion status

## Quality Assurance

- Target 100% lint/build/test pass rate
- Maintain 8+ PRP quality score
- Ensure implementation matches PRP specifications
- Validate against success criteria before completion

## File Management

- Update PRP file with implementation notes
- Move completed PRPs to `PRPs/completed/`
- Update backlog tracking files
- Document lessons learned for future PRPs