document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML("afterbegin", `
        <ul class="l1">
            <a href="home.html"><img src="./elgin_logo.png" id="img1" style="width:114px;height:60px;"></a>
            <div class="NavItem">
                <li><button onclick="location.href='home.html'">Home</button></li>
                <li class="dropdown">
                    <button class="dropbtn1">Departments</button>
                    <div class="dropdown-content">
                        <a class="dropbtn2" href="business.html">Business Education</a>
                        <a class="dropbtn2" href="careers.html">Career Education</a>
                        <a class="dropbtn2" href="ell.html">English Language Learning</a>
                        <a class="dropbtn2" href="fine_arts.html">Fine Arts</a>
                        <a class="dropbtn2" href="home_ec.html">Home Economics</a>
                        <a class="dropbtn2" href="english.html">Language Arts</a>
                        <a class="dropbtn2" href="language_arts.html">Languages</a>
                        <a class="dropbtn2" href="mathematics.html">Mathematics</a>
                        <a class="dropbtn2" href="physical_ed.html">Physical Education</a>
                        <a class="dropbtn2" href="science.html">Sciences</a>
                        <a class="dropbtn2" href="social_studies.html">Social Studies</a>
                        <a class="dropbtn2" href="tech_ed.html">Technology Education</a>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn1">Specialized Programs</button>
                    <div class="dropdown-content">
                        <a class="dropbtn2" href="advanced_placement.html">Advanced Placement</a>
                        <a class="dropbtn2" href="leadership.html">Leadership</a>
                    </div>
                </li>
                <li> <button onclick="location.href='forms.html'">Forms</button></li>
                <li><button onclick="location.href='HybridLearning.html'">Hybrid Learning</button></li>
                <li> <button onclick="location.href='contact.html'">Contact</button></li>
            </div>
        </ul>
    `);
});
