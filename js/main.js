

/*Hamburger*/
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

/*Modal*/
$(document).ready(function() {
    var modal = document.getElementById("win_modal");
    var span = document.getElementsByClassName("close")[0];

    $('#open-window').on('click', function () {
        modal.style.display = "block";
    });

    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
    }
});

var elem = document.getElementById("ads");
    border = document.getElementById("block-ads-button")
    line = document.getElementById("vertical-line")
    star = document.getElementById("block-ads__star")
    margin = document.getElementById("block-ads__paragraph-second")
    marginTop = document.getElementById("block-ads__heading_margin")
	      ads.onclick = function () {
	        if(star.style.marginLeft && marginTop.style.marginTop && margin.style.marginTop && star.style.display && elem.style.backgroundColor && elem.style.borderColor && border.style.borderColor && line.style.backgroundColor){
                star.style.marginLeft = "";
                marginTop.style.marginTop = "";
                margin.style.marginTop = "";
                star.style.display= "none";
              elem.style.backgroundColor = "";
              border.style.borderColor = "orange";
              line.style.backgroundColor = "";
              elem.style.borderColor = ""
            }
            else{
                star.style.marginLeft = "70%"
                marginTop.style.marginTop = "1px"
                margin.style.marginTop = "30px"
                star.style.display = "block"
               elem.style.backgroundColor = "orange";
               border.style.borderColor = "black";
               line.style.backgroundColor = "black";
               elem.style.borderColor = "black"
            }
            
          }
       
          var elemSecond = document.getElementById("adsSecond");
          borderSecond = document.getElementById("block-ads-button-second")
          lineSecond = document.getElementById("vertical-line-second")
          starSecond = document.getElementById("block-ads__star-two")
            marginSecond = document.getElementById("block-ads__paragraph-second_second")
            marginTopSecond = document.getElementById("block-ads__heading_margin_second")
                adsSecond.onclick = function () {
                  if(starSecond.style.marginLeft && marginTopSecond.style.marginTop && marginSecond.style.marginTop && starSecond.style.display && elemSecond.style.backgroundColor && elemSecond.style.borderColor && borderSecond.style.borderColor && lineSecond.style.backgroundColor){
                    starSecond.style.marginLeft = "";
                marginTopSecond.style.marginTop = "";
                marginSecond.style.marginTop = "";
                starSecond.style.display= "none";
                    elemSecond.style.backgroundColor = "";
                    borderSecond.style.borderColor = "orange";
                    lineSecond.style.backgroundColor = "";
                    elemSecond.style.borderColor = ""
                  }
                  else{
                    starSecond.style.marginLeft = "70%"
                    marginTopSecond.style.marginTop = "1px"
                    marginSecond.style.marginTop = "30px"
                    starSecond.style.display = "block"
                     elemSecond.style.backgroundColor = "orange";
                     borderSecond.style.borderColor = "black";
                     lineSecond.style.backgroundColor = "black";
                     elemSecond.style.borderColor = "black"
                  }
                  
                }

                var elemThree = document.getElementById("adsThree");
                borderThree = document.getElementById("block-ads-button-three")
                lineThree = document.getElementById("vertical-line-three")
                starThree = document.getElementById("block-ads__star-three")
                marginThree = document.getElementById("block-ads__paragraph-second_three")
                marginTopThree = document.getElementById("block-ads__heading_margin_three")
                      adsThree.onclick = function () {
                        if(starThree.style.marginLeft && marginTopThree.style.marginTop && marginThree.style.marginTop && starThree.style.display && elemThree.style.backgroundColor && elemThree.style.borderColor && borderThree.style.borderColor && lineThree.style.backgroundColor){
                            starThree.style.marginLeft = "";
                            marginTopThree.style.marginTop = "";
                            marginThree.style.marginTop = "";
                            starThree.style.display= "none";
                            elemThree.style.backgroundColor = "";
                          borderThree.style.borderColor = "orange";
                          lineThree.style.backgroundColor = "";
                          elemThree.style.borderColor = ""
                        }
                        else{
                            starThree.style.marginLeft = "70%"
                            marginTopThree.style.marginTop = "1px"
                            marginThree.style.marginTop = "30px"
                            starThree.style.display = "block"
                           elemThree.style.backgroundColor = "orange";
                           borderThree.style.borderColor = "black";
                           lineThree.style.backgroundColor = "black";
                           elemThree.style.borderColor = "black"
                        }
                        
                      }

                      var elemFour = document.getElementById("adsFour");
                      borderFour = document.getElementById("block-ads-button-four")
                      lineFour = document.getElementById("vertical-line-four")
                      starFour = document.getElementById("block-ads__star-four")
                    marginFour = document.getElementById("block-ads__paragraph-second_four")
                    marginTopFour = document.getElementById("block-ads__heading_margin_four")
                            adsFour.onclick = function () {
                              if(starFour.style.marginLeft && marginTopFour.style.marginTop && marginFour.style.marginTop && starFour.style.display && elemFour.style.backgroundColor && elemFour.style.borderColor && borderFour.style.borderColor && lineFour.style.backgroundColor){
                                starFour.style.marginLeft = "";
                            marginTopFour.style.marginTop = "";
                            marginFour.style.marginTop = "";
                            starFour.style.display= "none";
                                elemFour.style.backgroundColor = "";
                                borderFour.style.borderColor = "orange";
                                lineFour.style.backgroundColor = "";
                                elemFour.style.borderColor = ""
                              }
                              else{
                                starFour.style.marginLeft = "70%"
                                marginTopFour.style.marginTop = "1px"
                                marginFour.style.marginTop = "30px"
                                starFour.style.display = "block"
                                 elemFour.style.backgroundColor = "orange";
                                 borderFour.style.borderColor = "black";
                                 lineFour.style.backgroundColor = "black";
                                 elemFour.style.borderColor = "black"
                              }
                              
                            }
                    
                    var elemFive = document.getElementById("adsFive");
                      borderFive = document.getElementById("block-ads-button-five")
                      lineFive = document.getElementById("vertical-line-five")
                      starFive = document.getElementById("block-ads__star-five")
                    marginFive = document.getElementById("block-ads__paragraph-second_five")
                    marginTopFive = document.getElementById("block-ads__heading_margin_five")
                            adsFive.onclick = function () {
                              if(starFive.style.marginLeft && marginTopFive.style.marginTop && marginFive.style.marginTop && starFive.style.display && elemFive.style.backgroundColor && elemFive.style.borderColor && borderFive.style.borderColor && lineFive.style.backgroundColor){
                                starFive.style.marginLeft = "";
                            marginTopFive.style.marginTop = "";
                            marginFive.style.marginTop = "";
                            starFive.style.display= "none";
                                elemFive.style.backgroundColor = "";
                                borderFive.style.borderColor = "orange";
                                lineFive.style.backgroundColor = "";
                                elemFive.style.borderColor = ""
                              }
                              else{
                                starFive.style.marginLeft = "70%"
                                marginTopFive.style.marginTop = "1px"
                                marginFive.style.marginTop = "30px"
                                starFive.style.display = "block"
                                 elemFive.style.backgroundColor = "orange";
                                 borderFive.style.borderColor = "black";
                                 lineFive.style.backgroundColor = "black";
                                 elemFive.style.borderColor = "black"
                              }
                              
                            }

                            var elemSix = document.getElementById("adsSix");
                            borderSix = document.getElementById("block-ads-button-six")
                            lineSix = document.getElementById("vertical-line-six")
                            starSix = document.getElementById("block-ads__star-six")
                    marginSix = document.getElementById("block-ads__paragraph-second_six")
                    marginTopSix = document.getElementById("block-ads__heading_margin_six")
                                  adsSix.onclick = function () {
                                    if(starSix.style.marginLeft && marginTopSix.style.marginTop && marginSix.style.marginTop && starSix.style.display && elemSix.style.backgroundColor && elemSix.style.borderColor && borderSix.style.borderColor && lineSix.style.backgroundColor){
                                        starSix.style.marginLeft = "";
                                        marginTopSix.style.marginTop = "";
                                        marginSix.style.marginTop = "";
                                        starSix.style.display= "none";
                                        elemSix.style.backgroundColor = "";
                                      borderSix.style.borderColor = "orange";
                                      lineSix.style.backgroundColor = "";
                                      elemSix.style.borderColor = ""
                                    }
                                    else{
                                        starSix.style.marginLeft = "70%"
                                marginTopSix.style.marginTop = "1px"
                                marginSix.style.marginTop = "30px"
                                starSix.style.display = "block"
                                       elemSix.style.backgroundColor = "orange";
                                       borderSix.style.borderColor = "black";
                                       lineSix.style.backgroundColor = "black";
                                       elemSix.style.borderColor = "black"
                                    }
                                    
                                  }


                                  var elemSeven = document.getElementById("adsSeven");
                                  borderSeven = document.getElementById("block-ads-button-seven")
                                  lineSeven = document.getElementById("vertical-line-seven")
                                  starSeven = document.getElementById("block-ads__star-seven")
                    marginSeven = document.getElementById("block-ads__paragraph-second_seven")
                    marginTopSeven = document.getElementById("block-ads__heading_margin_seven")
                                        adsSeven.onclick = function () {
                                          if(starSeven.style.marginLeft && marginTopSeven.style.marginTop && marginSeven.style.marginTop && starSeven.style.display && elemSeven.style.backgroundColor && elemSeven.style.borderColor && borderSeven.style.borderColor && lineSeven.style.backgroundColor){
                                            starSeven.style.marginLeft = "";
                                        marginTopSeven.style.marginTop = "";
                                        marginSeven.style.marginTop = "";
                                        starSeven.style.display= "none";
                                            elemSeven.style.backgroundColor = "";
                                            borderSeven.style.borderColor = "orange";
                                            lineSeven.style.backgroundColor = "";
                                            elemSeven.style.borderColor = ""
                                          }
                                          else{
                                            starSeven.style.marginLeft = "70%"
                                            marginTopSeven.style.marginTop = "1px"
                                            marginSeven.style.marginTop = "30px"
                                            starSeven.style.display = "block"
                                             elemSeven.style.backgroundColor = "orange";
                                             borderSeven.style.borderColor = "black";
                                             lineSeven.style.backgroundColor = "black";
                                             elemSeven.style.borderColor = "black"
                                          }
                                          
                                        }

                                        var elemEight = document.getElementById("adsEight");
                                        borderEight = document.getElementById("block-ads-button-eight")
                                        lineEight = document.getElementById("vertical-line-eight")
                                        starEight = document.getElementById("block-ads__star-eight")
                                        marginEight = document.getElementById("block-ads__paragraph-second_eight")
                                        marginTopEight = document.getElementById("block-ads__heading_margin_eight")
                                              adsEight.onclick = function () {
                                                if(starEight.style.marginLeft && marginTopEight.style.marginTop && marginEight.style.marginTop && starEight.style.display && elemEight.style.backgroundColor && elemEight.style.borderColor && borderEight.style.borderColor && lineEight.style.backgroundColor){
                                                    starEight.style.marginLeft = "";
                                                    marginTopEight.style.marginTop = "";
                                                    marginEight.style.marginTop = "";
                                                    starEight.style.display= "none";
                                                    elemEight.style.backgroundColor = "";
                                                  borderEight.style.borderColor = "orange";
                                                  lineEight.style.backgroundColor = "";
                                                  elemEight.style.borderColor = ""
                                                }
                                                else{
                                                    starEight.style.marginLeft = "70%"
                                            marginTopEight.style.marginTop = "1px"
                                            marginEight.style.marginTop = "30px"
                                            starEight.style.display = "block"
                                                   elemEight.style.backgroundColor = "orange";
                                                   borderEight.style.borderColor = "black";
                                                   lineEight.style.backgroundColor = "black";
                                                   elemEight.style.borderColor = "black"
                                                }
                                                
                                              }

                                              var elemNine = document.getElementById("adsNine");
                                              borderNine = document.getElementById("block-ads-button-nine")
                                              lineNine = document.getElementById("vertical-line-nine")
                                              starNine = document.getElementById("block-ads__star-nine")
                                              marginNine = document.getElementById("block-ads__paragraph-second_nine")
                                              marginTopNine = document.getElementById("block-ads__heading_margin_nine")
                                                    adsNine.onclick = function () {
                                                      if(starNine.style.marginLeft && marginTopNine.style.marginTop && marginNine.style.marginTop && starNine.style.display && elemNine.style.backgroundColor && elemNine.style.borderColor && borderNine.style.borderColor && lineNine.style.backgroundColor){
                                                        starNine.style.marginLeft = "";
                                                    marginTopNine.style.marginTop = "";
                                                    marginNine.style.marginTop = "";
                                                    starNine.style.display= "none";
                                                        elemNine.style.backgroundColor = "";
                                                        borderNine.style.borderColor = "orange";
                                                        lineNine.style.backgroundColor = "";
                                                        elemNine.style.borderColor = ""
                                                      }
                                                      else{
                                                        starNine.style.marginLeft = "70%"
                                                        marginTopNine.style.marginTop = "1px"
                                                        marginNine.style.marginTop = "30px"
                                                        starNine.style.display = "block"
                                                         elemNine.style.backgroundColor = "orange";
                                                         borderNine.style.borderColor = "black";
                                                         lineNine.style.backgroundColor = "black";
                                                         elemNine.style.borderColor = "black"
                                                      }
                                                      
                                                    }


                                                    var elemTen = document.getElementById("adsTen");
                                                    borderTen = document.getElementById("block-ads-button-ten")
                                                    lineTen = document.getElementById("vertical-line-ten")
                                                    starTen = document.getElementById("block-ads__star-ten")
                                              marginTen = document.getElementById("block-ads__paragraph-second_ten")
                                              marginTopTen = document.getElementById("block-ads__heading_margin_ten")
                                                          adsTen.onclick = function () {
                                                            if(starTen.style.marginLeft && marginTopTen.style.marginTop && marginTen.style.marginTop && starTen.style.display && elemTen.style.backgroundColor && elemTen.style.borderColor && borderTen.style.borderColor && lineTen.style.backgroundColor){
                                                                starTen.style.marginLeft = "";
                                                                marginTopTen.style.marginTop = "";
                                                                marginTen.style.marginTop = "";
                                                                starTen.style.display= "none";
                                                                elemTen.style.backgroundColor = "";
                                                              borderTen.style.borderColor = "orange";
                                                              lineTen.style.backgroundColor = "";
                                                              elemTen.style.borderColor = ""
                                                            }
                                                            else{
                                                                starTen.style.marginLeft = "70%"
                                                        marginTopTen.style.marginTop = "1px"
                                                        marginTen.style.marginTop = "30px"
                                                        starTen.style.display = "block"
                                                               elemTen.style.backgroundColor = "orange";
                                                               borderTen.style.borderColor = "black";
                                                               lineTen.style.backgroundColor = "black";
                                                               elemTen.style.borderColor = "black"
                                                            }
                                                            
                                                          }
  
  
//  fetch('http://beegardenbackend.herokuapp.com/api/common/health-check/?format=json%27').then(result=>result.json()).then(res=>console.log(res))


  

  
                                                          