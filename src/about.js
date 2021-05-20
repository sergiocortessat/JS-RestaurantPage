// ABOUT
const aboutMe = () => {
  const about = document.createElement('div');
  about.classList.add('about');
  about.innerHTML = `
  <div>
  <div class='mx-auto d-flex flex-column text-center'>
    <div class='mx-auto'>
      <p class='my-4'>Phone: +964 770 8272458</p>
      <a href="mailto:sergiocortessat@gmail.com" class='my-2 text-decoration-none link-dark'>Email: sergiocortessat@gmail.com</a>
    </div>
    <div class="mx-auto form">
        <form onsubmit="return false">
          <h3><i class=""></i>Contact us</h3>
          <div class="">
            <span>Name</span><br>
            <input class='form-control'  type="text" required />
          </div>
          <div class="my-3">
            <span>Email</span><br>
            <input class='form-control' type="text" required />
          </div>
          <div class="my-3">
            <span>Type your message...</span><br>
            <textarea class='form-control'  required></textarea>
          </div>
          <input class='btn btn-dark my-3 mx-auto' type="submit" value="Send" id = "btn" />
        </form>
      </div>
  </div>
  </div>`;
  return about;
};

export default aboutMe;