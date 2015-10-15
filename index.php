<?php

require_once('conn.php');
TUser::isLoggedIn();

?>

<!DOCTYPE html>
<html>
<head>
    <title>Lemondo APIs</title>
    <style>
        #bg {
            position: fixed;
            top: 0;
            left: 0;

            /* Preserve aspet ratio */
            min-width: 100%;
            min-height: 100%;
        }

        #loaderDiv {
            display: block;
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(255, 255, 255, .8) url('ajax-loader.gif') 50% 50% no-repeat;
            overflow: hidden;
        }

        .logout {
            width: 32px;
            height: 32px;
            float: right;
            background-image: url('logout.png');
            cursor: pointer;
        }

        .logout:hover {
            background-image: url('logouthover.png');
        }

        /* LIST #8 */
        #list8 {
            margin: 40px 40px 40px 0px;
            position: relative;
        }

        #list8 ul {
            list-style: none;
            float: left;
        }

        #list8 ul li {
            font-family: Georgia, serif, Times;
            font-size: 18px;
            margin: 4px;
        }

        #list8 ul li a {
            display: block;
            width: 300px;
            height: 28px;
            background-color: #333;
            border-left: 5px solid #222;
            border-right: 5px solid #222;
            padding-left: 10px;
            text-decoration: none;
            color: #bfe1f1;
            padding: 10px;
        }

        #list8 ul li a:hover {
            -moz-transform: rotate(-5deg);
            -moz-box-shadow: 10px 10px 20px #000000;
            -webkit-transform: rotate(-5deg);
            -webkit-box-shadow: 10px 10px 20px #000000;
            transform: rotate(-5deg);
            box-shadow: 10px 10px 20px #000000;
        }
    </style>
    <script src="jquery.min.js"></script>
    <script>

        $(window).load(function () {
            $("#loaderDiv").fadeOut("slow");
        });

        function logout() {
            $("#loaderDiv").show();
            window.location.href = "logout.php";
        }

    </script>

</head>
<body>
<img src="bg.jpg" id="bg" alt="">

<div id="list8">
    <ul>
        <? if ($_SESSION['roleid'] > 1) { ?>
            <? $rows = select_db("SELECT * FROM apis WHERE userid = " . $_SESSION['userid']) ?>
        <? } else { ?>
            <? $rows = select_db("SELECT * FROM apis") ?>
        <? } ?>
        <? for ($i = 0; $i < count($rows); $i++) { ?>
            <li><a href="<?= $rows[$i]['title'] ?>"><?= $rows[$i]['title'] ?> API TR</a></li>
        <? } ?>
    </ul>
    <div class='logout' onclick="logout()"></div>
</div>
<div id="loaderDiv">
</div>

</body>
</html>