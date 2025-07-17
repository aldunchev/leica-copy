---
description: Update backlog status and move PRPs through workflow stages
---

# Update Backlog Status

Update the status of a PRP in the backlog management system.

## Usage: $ARGUMENTS

**Format**: `[prp-file] [status] [optional-notes]`
**Parameters**:
- `prp-file`: Name of PRP file (without path)
- `status`: New status (DRAFT, ACTIVE, IN_PROGRESS, COMPLETED, CANCELLED)
- `optional-notes`: Additional notes about the status change

**Example**: `nav-hero-product-cards-implementation.md IN_PROGRESS "Started MainNavigation component"`

## Valid Status Values

### PRP Lifecycle States
- **DRAFT**: PRP created but not yet validated
- **ACTIVE**: PRP validated and ready for implementation
- **IN_PROGRESS**: Implementation has started
- **COMPLETED**: Implementation finished and validated
- **CANCELLED**: PRP cancelled or deprioritized

### Status Transitions
```
DRAFT → ACTIVE (after validation)
ACTIVE → IN_PROGRESS (implementation started)
IN_PROGRESS → COMPLETED (implementation finished)
IN_PROGRESS → CANCELLED (implementation stopped)
ACTIVE → CANCELLED (deprioritized)
```

## Process

1. **Parse Arguments**
   - Extract PRP file, status, and optional notes from $ARGUMENTS
   - Validate PRP file exists
   - Verify status is valid
   - Confirm valid status transition

2. **Update Backlog Manager**
   - Modify `PRPs/backlog/backlog-manager.md`
   - Update PRP status section
   - Add timestamp and notes
   - Update metrics and progress

3. **File Management**
   - Move PRP to appropriate directory if needed
   - Update priority matrix if necessary
   - Maintain file history and links

4. **Metrics Update**
   - Update success metrics
   - Calculate completion times
   - Track quality scores
   - Update resource planning

## Backlog Manager Updates

### Status Section Update
```yaml
[prp-filename]:
  status: [NEW_STATUS]
  updated: [TIMESTAMP]
  notes: [OPTIONAL_NOTES]
  previous_status: [OLD_STATUS]
  transitions:
    - from: [OLD_STATUS]
      to: [NEW_STATUS]
      date: [TIMESTAMP]
      notes: [OPTIONAL_NOTES]
```

### Metrics Update
```yaml
Current Sprint:
  prps_in_progress: [COUNT]
  prps_completed: [COUNT]
  average_completion_time: [HOURS]
  success_rate: [PERCENTAGE]
```

## File Movement Rules

### Directory Structure
- **DRAFT**: `PRPs/draft/` - Initial PRP creation
- **ACTIVE**: `PRPs/active/` - Ready for implementation
- **IN_PROGRESS**: `PRPs/active/` - Implementation ongoing
- **COMPLETED**: `PRPs/completed/` - Implementation finished
- **CANCELLED**: `PRPs/draft/` - Deprioritized or cancelled

### Movement Logic
```
DRAFT → ACTIVE: Move from draft/ to active/
IN_PROGRESS → COMPLETED: Move from active/ to completed/
* → CANCELLED: Move to draft/ with cancelled status
```

## Automated Actions

### Status-Based Actions
- **ACTIVE**: Validate PRP quality score
- **IN_PROGRESS**: Start time tracking
- **COMPLETED**: Calculate completion time, update metrics
- **CANCELLED**: Archive and update priority matrix

### Notifications
- Update team on status changes
- Alert on blocked dependencies
- Report completion milestones
- Warn on overdue items

## Validation

### Pre-Update Validation
- [ ] PRP file exists
- [ ] Status is valid value
- [ ] Transition is allowed
- [ ] User has permissions

### Post-Update Validation
- [ ] Backlog manager updated
- [ ] File moved if necessary
- [ ] Metrics recalculated
- [ ] Priority matrix updated

## Error Handling

### Common Errors
- **File not found**: Verify PRP filename and path
- **Invalid status**: Show valid status options
- **Invalid transition**: Show allowed transitions
- **Permission denied**: Check file permissions

### Recovery Actions
- Rollback status change if update fails
- Maintain consistency between files
- Log all changes for audit trail
- Provide clear error messages

## Integration with Other Commands

### Command Chain Examples
```bash
# Create → Validate → Activate → Start → Complete
/create-requirement business user-auth
/generate-prp requirements/business/user-auth.md
/validate-prp PRPs/draft/user-auth-implementation.md
/update-backlog user-auth-implementation.md ACTIVE
/execute-prp PRPs/active/user-auth-implementation.md
/update-backlog user-auth-implementation.md COMPLETED
```

### Dependency Management
- Check dependencies before status changes
- Update dependent PRPs automatically
- Maintain dependency graph
- Alert on circular dependencies

## Reporting

### Status Reports
- Current backlog status
- Progress over time
- Completion rates
- Bottleneck identification

### Metrics Dashboard
- PRPs by status
- Average completion time
- Success rate trends
- Quality score distribution

## Usage Examples

```bash
# Start implementation
/update-backlog nav-hero-cards.md IN_PROGRESS

# Complete implementation
/update-backlog nav-hero-cards.md COMPLETED "All components implemented and tested"

# Cancel implementation
/update-backlog nav-hero-cards.md CANCELLED "Deprioritized for Q2"

# Activate draft PRP
/update-backlog user-auth.md ACTIVE "Validation complete, ready for implementation"
```

This command maintains accurate backlog state and provides visibility into the development pipeline progress.