// Ex: '[ ](https://chat.vinatex.com.vn/group/test?msg=abcdef)  Test'
// Return: 'Test'
export const formatHyperlink = (text: string): string => text.replace(/^\[([\s]*)\]\(([^)]*)\)\s/, '').trim();
