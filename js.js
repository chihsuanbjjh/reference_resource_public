const array = [
  ['Suan', 23, 'None'],
  ['Alice', 22, 'None'],
];

// append <tr><td></td></tr> 到tbody上
let tbody = $('tbody');
let content = `
    <tr><td>Martin</td>
    <td>24</td>
    <td>None</td>
    </tr>`;

tbody.append(content);
tbody.append(content);

array.forEach((rowVale) => {
  let content = `
    <tr><td>${rowVale[0]}</td>
    <td>${rowVale[1]}</td>
    <td>${rowVale[2]}</td>
    </tr>`;
  tbody.append(content);
});
