
//检查注册页面信息是否符合格式要求
function check_info()
{
    var all_info_are_right = 7;

    var account = document.getElementById("account").value;
    if ((account.length != 0) && ((account.length < 6) || (account.length >16)))
    {
        var account_warning = document.getElementById("account_warning");
        account_warning.innerHTML = "账号为6-16位字符" 
    }
    else
    {
        var account_warning = document.getElementById("account_warning");
        account_warning.innerHTML = "";
        all_info_are_right--;
    }

    var password = document.getElementById("password").value;
    if ((password.length != 0) && ((password.length < 6) || (password.length > 16))) {
        var password_warning = document.getElementById("password_warning");
        password_warning.innerHTML = "密码为6-16个字符"
    }
    else
    {
        var password_warning = document.getElementById("password_warning");
        password_warning.innerHTML = "";
        all_info_are_right--;
    }

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        var confirmPassword_warning = document.getElementById("confirmPassword_warning");
        confirmPassword_warning.innerHTML = "两次密码输入应该相同"
    }
    else {
        var confirmPassword_warning = document.getElementById("confirmPassword_warning");
        confirmPassword_warning.innerHTML = "";
        all_info_are_right--;
    }

    var nickname = document.getElementById("nickname").value;
    if ((nickname.length != 0) && ((nickname.length < 6) || (nickname.length > 16))) {
        var nickname_warning = document.getElementById("nickname_warning");
        nickname_warning.innerHTML = "昵称为6-16个字符"
    }
    else {
        var nickname_warning = document.getElementById("nickname_warning");
        nickname_warning.innerHTML = "";
        all_info_are_right--;
    }

    var cellphoneNumber = document.getElementById("cellphoneNumber").value;
    if ((cellphoneNumber.length != 0) && ((cellphoneNumber.length != 11) || isNaN(cellphoneNumber))) {
        var cellphoneNumber_warning = document.getElementById("cellphoneNumber_warning");
        cellphoneNumber_warning.innerHTML = "手机号码为11位阿拉伯数字"
    }
    else {
        var cellphoneNumber_warning = document.getElementById("cellphoneNumber_warning");
        cellphoneNumber_warning.innerHTML = "";
        all_info_are_right--;
    }

    var reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@mail.ustc.edu.cn$/gi;
    var ustcEmail = document.getElementById("ustcEmail").value;
    if ((ustcEmail.length != 0) && (!reg.test(ustcEmail))) {
        var ustcEmail_warning = document.getElementById("ustcEmail_warning");
        ustcEmail_warning.innerHTML = "邮箱不是科大学生邮箱"
    }
    else {
        var ustcEmail_warning = document.getElementById("ustcEmail_warning");
        ustcEmail_warning.innerHTML = "";
        all_info_are_right--;
    }

    var verificationCode = document.getElementById("verificationCode").value;
    if ((verificationCode.length != 0) && (verificationCode != 'klkq')) {
        var verificationCode_warning = document.getElementById("verificationCode_warning");
        verificationCode_warning.innerHTML = "验证码错误"
    }
    else {
        var verificationCode_warning = document.getElementById("verificationCode_warning");
        verificationCode_warning.innerHTML = "";
        all_info_are_right--;
    }

    if (account.length * password.length * confirmPassword.length * nickname.length * cellphoneNumber.length * ustcEmail.length * verificationCode.length == 0)
    {

        all_info_are_right++;
    }

    return all_info_are_right;
}

//注册成功跳转页面
function goToLoginFromRegestered()
{
    if (check_info() == 0)
    {
        console.log('注册成功');
        alert("注册成功！点击确定，跳转到登录界面。");
        //location.href = "'/klkqyfct/index.html'"
        return true;
    }
    else
    {
        console.log('信息不完整');
        alert("尚有信息未填写完整！");
        return false;
    }
}

