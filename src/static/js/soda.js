$(document).ready(function () {
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
    data: [["", 1, "MTNDEW_TRN", "Mountain Dew", "earmdbl101", "eamtrn23", "GREEN", "00:09:42", 0]],
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

console.log("wassup")