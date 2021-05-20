const footerFun = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
<div class="text-center">
  <span class="">&copy; Sergio Cortes 2021</span>
</div>`;
  return footer;
};

export default footerFun;