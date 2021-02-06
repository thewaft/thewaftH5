

//根据用户选择，调用石头剪刀布
function paper() {
    document.getElementById("mineChoice").innerHTML="<img src=\"images/paper.png\">";
    myChoice=1/3;
    judge_2();
}
function rock() {
    document.getElementById("mineChoice").innerHTML="<img src=\"images/rock.png\">";
    myChoice=2/3;
    judge_2();
}
function scissors() {
    document.getElementById("mineChoice").innerHTML="<img src=\"images/scissors.png\">";
    myChoice=3/3;
    judge_2()
}
//电脑生成自己选择
function gogo() {
    var str;
    var r_Random = Math.random();

    if (r_Random < 1 / 3) {
        str = "<img src=\"images/paper.png\">";
    } else if (r_Random < 2 / 3) {
        str = "<img src=\"images/rock.png\">";
    } else {
        str = "<img src=\"images/scissors.png\">"
    }
    document.getElementById("computerChoice").innerHTML= str;
    return r_Random;
}

//判断函数，根据机器的选择，再根据自己的选择
function judge_2() {
    var c_c=gogo();
    if (c_c < 1/3) {
        if (myChoice == 1/3) {
            alert("We're in a draw");
            document.getElementById("result").innerHTML="We're in a draw";
        } else if (myChoice == 2/3) {
            alert("You lose");
            document.getElementById("result").innerHTML="You lose";
        } else if (myChoice == 3/3) {
            alert("You win");
            document.getElementById("result").innerHTML="You win";
        }
    } else if (c_c < 2 / 3) {
        if (myChoice == 1 / 3) {
            alert("You win");
            document.getElementById("result").innerHTML="You win";
        } else if (myChoice == 2 / 3) {
            alert("We're in a draw");
            document.getElementById("result").innerHTML="We're in a draw";
        } else if (myChoice == 3 / 3) {
            alert("You lose");
            document.getElementById("result").innerHTML="You lose";
        }
    } else if (c_c < 3 / 3) {
        if (myChoice == 1 / 3) {
            alert("You lose");
            document.getElementById("result").innerHTML="You lose";
        } else if (myChoice == 2 / 3) {
            alert("You win");
            document.getElementById("result").innerHTML="You win";
        } else if (myChoice == 3 / 3) {
            alert("We're in a draw");
            document.getElementById("result").innerHTML="We're in a draw";
        }
    }
    document.write(str);
}


