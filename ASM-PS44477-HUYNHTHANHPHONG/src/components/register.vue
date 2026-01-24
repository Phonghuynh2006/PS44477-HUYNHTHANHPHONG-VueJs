<template>
<div class="container">
  <h1 class="text-center">Đăng Ký</h1>
<form>
<div class="row g-3 mb-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Họ" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Tên" aria-label="Last name">
  </div>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="visible-addon">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="visible-addon">
  <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon">
</div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Nhập lại mật khẩu</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Đồng ý điều khoản</label>
  </div>
  <button type="submit" class="btn btn-primary">Đăng Ký</button>
</form>
</div>
</template>