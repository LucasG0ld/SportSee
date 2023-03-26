/**
 * Sorts and maps data to return an array of objects with subject, value, and fullMark properties.
 * @param {Array<{kind: number, value: number}>} data - The data to be sorted and mapped.
 * @returns {Array<{subject: string, value: number, fullMark: number}>} An array of objects with subject, value, and fullMark properties.
 */

export const sortData = (data) => {
    const kindOrder = {
        6: 'intensité',
        5: 'vitesse',
        4: 'force',
        3: 'endurance',
        2: 'énergie',
        1: 'cardio'
    };
  
    return data.sort((a, b) => b.kind - a.kind)
        .map(d => ({
            subject: kindOrder[d.kind],
            value: d.value,
            fullMark: 250
        }));
  };