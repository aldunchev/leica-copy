---
description: Create new requirement file from template with proper structure
---

# Create New Requirement

Create a new requirement file from template with proper structure and validation.

## Usage: $ARGUMENTS

**Format**: `[type] [name]`
**Parameters**:
- `type`: `business` or `technical`
- `name`: Requirement name (kebab-case, e.g., "user-authentication")

**Example**: `business user-authentication`

## Process

1. **Parse Arguments**
   - Extract type and name from $ARGUMENTS
   - Validate type is `business` or `technical`
   - Validate name uses kebab-case format

2. **Determine Template**
   - `business` → Use `requirements/templates/business-requirement-template.md`
   - `technical` → Use `requirements/templates/technical-requirement-template.md`

3. **Create Requirement File**
   - Copy appropriate template
   - Save as `requirements/[type]/[name].md`
   - Replace template placeholders with contextual content

4. **Initialize Content**
   - Add feature name and basic description
   - Include creation date and status
   - Set initial priority and effort estimates
   - Add placeholder sections for completion

5. **Backlog Integration**
   - Update `PRPs/backlog/backlog-manager.md` with new requirement
   - Add entry to priority matrix
   - Set initial status as "DRAFT"

## Output Structure

**File Location**: `requirements/[type]/[name].md`

**Content**:
- Complete requirement template with placeholders
- Contextual examples and guidelines
- Initial metadata and tracking information
- Links to related templates and documentation

## Quality Checklist

- [ ] Template copied correctly
- [ ] File saved in correct location
- [ ] Placeholders clearly marked
- [ ] Backlog updated with new requirement
- [ ] Priority matrix includes new item
- [ ] Creation date and metadata added

## Next Steps

After creating requirement:
1. **Fill in details**: Complete all template sections
2. **Review and refine**: Ensure completeness and clarity
3. **Generate PRP**: Use `/generate-prp` command when ready
4. **Prioritize**: Update priority matrix with accurate estimates

## Usage Examples

```bash
# Create business requirement for user authentication
/create-requirement business user-authentication

# Create technical requirement for performance optimization
/create-requirement technical performance-optimization

# Create business requirement for search functionality
/create-requirement business product-search
```

## Validation

- **Type validation**: Only `business` or `technical` allowed
- **Name validation**: Must be kebab-case, no spaces or special characters
- **Duplicate check**: Prevent overwriting existing requirements
- **Template availability**: Ensure template exists and is accessible

## Error Handling

- **Invalid type**: Show available types and usage example
- **Invalid name**: Show naming conventions and examples
- **File exists**: Offer to backup existing or choose new name
- **Template missing**: Report issue and suggest manual creation

This command streamlines requirement creation while maintaining consistency and proper workflow integration.