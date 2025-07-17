# Validate PRP Quality

## Usage: /validate-prp [prp-file]

Validate a PRP file for quality, completeness, and readiness for implementation.

**Parameters**:
- `prp-file`: Path to PRP file (typically in `PRPs/active/` or `PRPs/draft/`)

**Example**: `/validate-prp PRPs/active/nav-hero-product-cards-implementation.md`

## Validation Process

### 1. Structural Validation
- [ ] All required sections present
- [ ] Proper markdown formatting
- [ ] No broken links or references
- [ ] Code blocks properly formatted
- [ ] Quality checklist included

### 2. Content Validation
- [ ] Clear goal and business value
- [ ] Specific success criteria defined
- [ ] All necessary context included
- [ ] Implementation blueprint complete
- [ ] Validation commands executable

### 3. Technical Validation
- [ ] Figma links accessible and valid
- [ ] Code examples reference real files
- [ ] Dependencies clearly identified
- [ ] Integration points documented
- [ ] Error handling strategies included

### 4. Completeness Validation
- [ ] All placeholders replaced with actual content
- [ ] External documentation links verified
- [ ] Existing pattern references valid
- [ ] Anti-patterns clearly defined
- [ ] Timeline and effort estimates realistic

## Quality Scoring

### Scoring Criteria (1-10 scale)

**Context Completeness (25%)**
- 10: All necessary context included, no gaps
- 7-9: Most context included, minor gaps
- 4-6: Some context missing, moderate gaps
- 1-3: Major context gaps, unclear requirements

**Implementation Clarity (25%)**
- 10: Crystal clear implementation path
- 7-9: Clear path with minor ambiguities
- 4-6: Somewhat clear, some confusion possible
- 1-3: Unclear, likely to cause implementation issues

**Validation Completeness (25%)**
- 10: All validation commands executable and complete
- 7-9: Most validation covered, minor gaps
- 4-6: Basic validation present, some gaps
- 1-3: Minimal validation, major gaps

**Technical Accuracy (25%)**
- 10: All technical details accurate and current
- 7-9: Mostly accurate, minor issues
- 4-6: Generally accurate, some outdated info
- 1-3: Significant technical inaccuracies

### Overall Quality Assessment

**9-10**: Excellent - Ready for immediate implementation
**7-8**: Good - Minor improvements needed
**5-6**: Acceptable - Moderate improvements needed
**3-4**: Poor - Major improvements required
**1-2**: Inadequate - Substantial rework needed

## Validation Report

### Report Structure
```yaml
PRP_VALIDATION_REPORT:
  file: [PRP filename]
  date: [Validation date]
  
  STRUCTURAL:
    score: [1-10]
    issues: [List of structural issues]
    
  CONTENT:
    score: [1-10]
    issues: [List of content issues]
    
  TECHNICAL:
    score: [1-10]
    issues: [List of technical issues]
    
  COMPLETENESS:
    score: [1-10]
    issues: [List of completeness issues]
    
  OVERALL:
    score: [Weighted average]
    confidence: [Implementation confidence level]
    recommendation: [APPROVE/IMPROVE/REJECT]
    
  IMPROVEMENTS:
    required: [Must-fix issues]
    recommended: [Should-fix issues]
    optional: [Nice-to-fix issues]
```

## Automated Checks

### File Structure Checks
- Required sections present
- Proper heading hierarchy
- Code blocks have language tags
- Links formatted correctly
- Images have alt text

### Content Quality Checks
- No "TODO" or "TBD" placeholders
- Specific examples provided
- External links accessible
- File references valid
- Commands executable

### Technical Accuracy Checks
- Figma links return 200 status
- Code examples compile
- Dependencies available
- Version compatibility
- Security considerations

## Improvement Suggestions

### Common Issues and Fixes

**Issue**: Generic placeholders like "TBD"
**Fix**: Replace with specific content or research

**Issue**: Broken external links
**Fix**: Verify and update URLs

**Issue**: Vague success criteria
**Fix**: Define specific, measurable outcomes

**Issue**: Missing error handling
**Fix**: Add error scenarios and recovery strategies

**Issue**: Outdated dependencies
**Fix**: Update to current versions and patterns

## Integration with Workflow

### Before Implementation
- Validate PRP before moving to active
- Ensure score is 7+ before proceeding
- Address all "required" improvements

### During Implementation
- Re-validate if requirements change
- Update PRP if new issues discovered
- Maintain quality score throughout

### After Implementation
- Validate final PRP against actual implementation
- Document lessons learned
- Update template with improvements

## Usage Examples

```bash
# Validate draft PRP
/validate-prp PRPs/draft/user-auth-implementation.md

# Validate active PRP
/validate-prp PRPs/active/nav-hero-product-cards-implementation.md

# Validate completed PRP
/validate-prp PRPs/completed/button-component-implementation.md
```

## Output

- **Summary**: Overall score and recommendation
- **Detailed Report**: Section-by-section analysis
- **Action Items**: Specific improvements needed
- **Confidence Level**: Likelihood of successful implementation
- **Next Steps**: Recommended actions

This validation ensures PRPs meet quality standards before implementation, reducing failure rates and improving development efficiency.