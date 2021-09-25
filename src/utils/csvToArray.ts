export const csvToArray = (csvString: string) => {
  const arr = csvString.split('\n').map((v, i) => {
    if (v.match('"')) {
      const re = new RegExp('".+(,).+"', 'gi');
      v = v.replaceAll(re, (tmp) => tmp.replace(',', '.'));
    }

    return [
      String(i),
      ...v.replaceAll('\\r', '').replaceAll('"', '').trim().split(','),
    ];
  });
  return arr;
};
