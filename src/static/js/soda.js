$.ajax({
  url: '/api/v1/sodas/',
}).then(soda => {
  return soda.map(el => {el['id'] = ''; return Object.values(el)});
}).then(newSodas => {
  return $(document).ready(function () {
    $('#table_id').DataTable({
      columnDefs: [
        {
          orderable: false,
          className: "select-checkbox",
          targets: 0,
        },
        {
          className: "dt-body-center",
          targets: [1, 2, 3, 4, 5, 6, 7, 8],
        }
      ],
      select: {
        style: "multi",
        selector: "td:first-child",
      },
      data: newSodas,
      "scrollY": "200px",
      columns: [
        { title: "" },
        { title: "Order" },
        { title: "Tenant Id" },
        { title: "Display Name" },
        { title: "DB Host" },
        { title: "DB Instance" },
        { title: "Status" },
        { title: "Time" },
        { title: "Errors" },
      ],
      "createdRow": function (row, data, dataIndex) {
        if (data[6] == "GREEN") {
          $(row).addClass('green');
        } else if (data[6] == "INPROGRESS") {
          $(row).addClass('yellow');
        } else if (data[6] == "BLUE") {
          $(row).addClass('blue');
        }
      },
    });
  });
});
