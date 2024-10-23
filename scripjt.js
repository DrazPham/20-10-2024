onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

function showModalAfterDelay() {
    setTimeout(() => {
        document.getElementById('myModal').style.display = 'block';
        // console.log("hi");
    }, 20000); // 20 seconds delay
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
showModalAfterDelay()
