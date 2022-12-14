import React from "react";

function About(){
    return <div name="about" className="about section-container" id={"about"}>
        <h2 className="darkHeading mainHeading"> מנה ראשונה</h2>
        <h3 className="darkHeading mainHeading"> נעים להכיר ,</h3>
        <div className="rectengle"> </div>
        <div className="aboutIntro">
            <div className="darkHeading">
                <h4>שרון כהן</h4>
                <p> שפית מעולם הנטרופתיה</p>
                <p>מרצה במכללת רידמן</p>
                <p>מלווה בטיפול גופנפש בפרחי באך, צמחים ורפלקסולוגיה</p>
            </div>
            <div className="darkHeading">
                <h4>לירון לוי</h4>
                <p>נטרופתית N.D</p>
                <p>תואר שני בבריאות הציבות עם התתמחות בקידום בריאות MPH</p>
                <p>בוגרת האוניברסיטה העברית</p>
            </div>
        </div>
        <div className="about-info">
            <div className="aboutImg"></div>
            <div className="about-discription darkHeading">
            <p >בסדנאות הבישול הבריא אנחנו מלמדות אתכם מהן הדרכים לקדם את הבריאות שלכם, איך לאכול בריא ומאוזן, נותנות לכם טיפים לירידה נכונה במשקל ושמירה על משקל תקין, והכי חשוב חושפות אתכם לעולם קולינרי מדהים שבו אתם לומדים לבשל, לאפות ולהכין מאכלים בריאים ומזינים שימלאו את הגוף והנפש שלכם באנרגיות חדשות ובתחושת חיוניות וערנות. </p>
            <p >בסדנאות שלנו תכירו חומרי גלם חדשים, שיטות עבודה פשוטות ויישומיות ותתחילו לבשל במינימום השקעה ומקסימום תוצאה.  </p>
            <p>אין לנו ספק שתצאו מהסדנא בריאים יותר, חיוניים ומלאי אנרגיה והכי חשוב – מלאי מוטיבציה לעשות שינוי אמתי שישפיע לטובה על הבריאות הפיזית והנפשית שלכם ושל כל הסובבים אתכם. </p>
            <em>נשמח לראותכם מצטרפים לקהילת הבשלנים לומדים ומבשלים בהתמדה ונחישות , חווים את השינוי הגדול בכיף ובאיזון. </em>
            <hr style={{color:"white"}}></hr>
            <em>כי עם שרון ולירון – פשוט לחיות בריא ונכון!!</em>
            </div>
            
        </div>
    </div>
}

export default About;