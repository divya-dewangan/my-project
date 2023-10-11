// import React from 'react';
// import DataTable from 'react-data-table-component';

// const data = [
//   { id: 1, name: 'John Doe', age: 30 },
//   { id: 2, name: 'Jane Smith', age: 25 },
//   // Add more data rows as needed
// ];

// const columns = [
//   {
//     name: 'ID',
//     selector: 'id',
//     sortable: true,
//   },
//   {
//     name: 'Name',
//     selector: 'name',
//     sortable: true,
//   },
//   {
//     name: 'Age',
//     selector: 'age',
//     sortable: true,
//   },
//   // Add more columns as needed
// ];

// const Table = () => {
//   return <DataTable title="User Data" columns={columns} data={data} />;
// };

// export default Table;


import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    // Add more data rows as needed
  ]);

  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id, field, value) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setData(updatedData);
  };

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      cell: row => {
        if (editingId === row.id) {
          return (
            <input
              type="text"
              value={row.name}
              onChange={e => handleEdit(row.id, 'name', e.target.value)}
            />
          );
        }
        return <div onClick={() => setEditingId(row.id)}>{row.name}</div>;
      },
    },
    {
      name: 'Age',
      selector: 'age',
      sortable: true,
      cell: row => {
        if (editingId === row.id) {
          return (
            <input
              type="number"
              value={row.age}
              onChange={e => handleEdit(row.id, 'age', e.target.value)}
            />
          );
        }
        return <div onClick={() => setEditingId(row.id)}>{row.age}</div>;
      },
    },
    // Add more columns as needed
  ];

  return <DataTable title="User Data" columns={columns} data={data} />;
};

export default Table;
