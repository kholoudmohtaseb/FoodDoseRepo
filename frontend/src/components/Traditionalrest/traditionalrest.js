import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './traditionalrest.css'
import Header2 from '../Header2/header2';
import Logout from '../logout/logout';

function Traditionalrest() {


    return (
        <div class='container'>
            <Header2 />
            <Logout />
            <table class='traditional' align="center">
                <tr>
                    <td onClick={() => { window.location.href = '/fastfoodres/helth/lkdfmkl544xc54d87a3c56' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/p960x960/79934539_1284946271698544_8883810827216355328_o.jpg?_nc_cat=111&ccb=2&_nc_sid=85a577&_nc_ohc=LKSg9W6DZyEAX-QXezl&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=d1a4f0f2060e8a4aaa8b0847fa6c69fe&oe=5FD9C929"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-0/c155.0.206.206a/p206x206/19143309_1814294695550690_1206479028125246372_o.png?_nc_cat=103&ccb=2&_nc_sid=19026a&_nc_ohc=Ye8YDVUKM6YAX92Apz6&_nc_oc=AQnGhUxPo0eK_tcq-xvkvAV7UyLEpCopgnXrYiLkO3XER5OwOyJr64KbPzEhtpW8gkQ&_nc_ht=scontent.fjrs4-1.fna&oh=90c2512b836a4c5d490d26dccc51b333&oe=5FDA07A5"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/p960x960/18423045_1531607376910145_7158048697369720473_o.jpg?_nc_cat=110&ccb=2&_nc_sid=85a577&_nc_ohc=P1-jE26t9xUAX8SlYS2&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=041d083565d3546d5e21ce94ae1f6e65&oe=5FDC528F"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/c0.3.206.206a/p206x206/10441271_311712919038583_7635794006581354270_n.png?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=uIqiI_1bg0kAX_Vk0nQ&_nc_ht=scontent.fjrs4-1.fna&oh=606468894622877693e261d0daf7f451&oe=5FDAB163"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/helth/erokglre5454fefwe54548' }}><img src={"data:image/jpeg;base64,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"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/helth/lkdfmkl544xc54d87a3c56' }}>Orient House</th>
                    <th class="text-center">Al Am Saleh</th>
                    <th class="text-center">Beit jeddi</th>
                    <th class="text-center">Alajooz</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/helth/erokglre5454fefwe54548' }}>ALQuds</th>

                </tr>
                <tr></tr>
                <tr>
                    <td><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrB2KUoAy3MZq7t4TRoDyqnnvDW0ml9rSuDw&usqp=CAU"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/25552209_919124751570755_1427506206719772204_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=GUpL5JZAXIcAX97krVp&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=1f78ce772090697d49d284fac2175460&oe=5FDC1D12"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/helth/54elfwnkwk654f56ew456a' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/52930354_391217931442632_8737179471204843520_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=w3jc8ENFjEIAX-nbwOU&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=ea26ecb56b9cae3c3c6fa692de6f8ed2&oe=5FDB639C"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/helth/wsadmdfmm654w564fw4fe8' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/24312926_1772930189678401_3825741668349176768_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=vG3N9ab3xqsAX8NUTho&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=8f9f582221f1ce31dbb366e1e2e3c032&oe=5FDCE930"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/helth/ewef54ewfasda5sd54asd4' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/90229186_2758666261028233_6529146619806351360_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3_gbSW667hIAX-Tk4PR&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=4c249adf7c47faf7861833adf2877cf7&oe=5FDC15D0"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center">AbuMazen</th>
                    <th class="text-center">Arabesque</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/helth/54elfwnkwk654f56ew456a' }}>Ibrahim Paşa</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/helth/wsadmdfmm654w564fw4fe8' }}>Talet Jabal</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/helth/ewef54ewfasda5sd54asd4' }}>Ward</th>
                </tr>
            </table>


        </div>
    );
}


export default Traditionalrest;