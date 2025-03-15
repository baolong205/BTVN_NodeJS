function confirmDelete(btn) {
  let id = btn.id;
  let isDelete = confirm("Are you sure ???");
  if (isDelete) {
    fetch(`http://localhost:3000/products/delete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        location.reload();
      });
  }
}
