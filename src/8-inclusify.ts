export const inclusify = (text : string) => {
    text = text.replaceAll('il ', 'iel ')
    .replaceAll('Il ', 'Iel ')
    .replaceAll(' elle ', ' iel ')
    .replaceAll('Elle ', 'Iel ')
    .replaceAll(' ils ', ' iels ')
    .replaceAll('Ils ', 'Iels ')
    .replaceAll(' elles ', ' iels ')
    .replaceAll('Elles ', 'Iels ')
    .replaceAll(' ceux ', ' celleux ')
    .replaceAll('Ceux ', 'Celleux ')
    .replaceAll(' celles ', ' celleux ')
    .replaceAll('Celles ', 'Celleux ');
    return text
};

/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * @param {string} text
 */
