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
    data: [
      ["", 1, "MTNDEW_TRN", "Mountain Dew", "earmdbl101", "eamtrn23", "GREEN", "00:09:42", 0],
      ["", 2, "PEPSI_TRN", "Pepsi", "eamdbl117", "eamtrn23", "GREEN", "00:08:21", 1],
      ["", 3, "COKE_TRN", "Coke", "earmdbl145", "eamtrn67", "GREEN", "00:06:23", 0],
      ["", 1, "MTNDEW_TRN", "Mountain Dew", "earmdbl101", "eamtrn23", "GREEN", "00:09:42", 0],
      ["", 2, "PEPSI_TRN", "Pepsi", "eamdbl117", "eamtrn23", "GREEN", "00:08:21", 1],
      ["", 3, "COKE_TRN", "Coke", "earmdbl145", "eamtrn67", "GREEN", "00:06:23", 0],
      ["", 1, "MTNDEW_TRN", "Mountain Dew", "earmdbl101", "eamtrn23", "GREEN", "00:09:42", 0],
      ["", 2, "PEPSI_TRN", "Pepsi", "eamdbl117", "eamtrn23", "GREEN", "00:08:21", 1],
      ["", 3, "COKE_TRN", "Coke", "earmdbl145", "eamtrn67", "GREEN", "00:06:23", 0],
    ],
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
