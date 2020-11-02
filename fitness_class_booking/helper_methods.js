export function createID (length) {
    var result = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charLen = chars.length;
    for ( let i = 0; i < length; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * charLen));
    }
    return result;
}