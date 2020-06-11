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
    });
  });
});
