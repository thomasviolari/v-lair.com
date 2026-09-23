const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function readContactInput(body) {
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return { error: 'Request body must be an object' };
    }
    const input = body;
    const firstName = readString(input.firstName, 100);
    const lastName = readString(input.lastName, 100);
    const email = readString(input.email, 320);
    const phone = readOptionalString(input.phone, 50);
    const notes = readOptionalString(input.notes, 5000);
    if (!firstName || !lastName || !email) {
        return { error: 'First name, last name, and email are required' };
    }
    if (!EMAIL_PATTERN.test(email)) {
        return { error: 'A valid email address is required' };
    }
    const metadata = input.metadata;
    if (metadata !== undefined && (metadata === null || typeof metadata !== 'object' || Array.isArray(metadata))) {
        return { error: 'Metadata must be a JSON object' };
    }
    if (metadata !== undefined && JSON.stringify(metadata).length > 10000) {
        return { error: 'Metadata is too large' };
    }
    return { value: { firstName, lastName, email, phone, notes, metadata } };
}
export function readEmailInput(body) {
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return { error: 'Request body must be an object' };
    }
    const input = body;
    const to = readString(input.to, 320);
    const subject = readString(input.subject, 200);
    const message = readString(input.body, 20000);
    if (!to || !subject || !message) {
        return { error: 'Recipient, subject, and body are required' };
    }
    if (!EMAIL_PATTERN.test(to)) {
        return { error: 'A valid recipient email address is required' };
    }
    return { value: { to, subject, message } };
}
export function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    })[character] || character);
}
function readString(value, maxLength) {
    return typeof value === 'string' && value.trim() && value.length <= maxLength
        ? value.trim()
        : null;
}
function readOptionalString(value, maxLength) {
    if (value === undefined || value === null || value === '')
        return undefined;
    return readString(value, maxLength);
}
