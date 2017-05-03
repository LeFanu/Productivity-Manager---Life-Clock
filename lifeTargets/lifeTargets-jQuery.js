/**
 * Created by Karol on 2017-02-22.
 */
$(function () {
    'use strict';

    var goal;

    
    
    //adding class to all ul
    //var list = $('.goalsBlocks ul').addClass("droppableList");
    var instruction = $('<span/>').addClass("instruction").text("Drop your goals here!");

    
    //this function makes all goals dropable on all divs
    function droppableGoals(  ) {
        $('.goalsBlocks').droppable(
            //scope is the connection of allowed elements
            {scope: "tasks",
             //next 3 positions are the behaviour of the goal on drop or on the move
                                     over: function() {
                                         $(this).css({backgroundColor: "#BBECFF"});
                                     } ,
                                     out: function() {
                                         $(this).css({backgroundColor: "aliceblue"});
                                     },
             //when it is finally dropped the code below will be activated
                                     drop: function (event, ui) {
                                         //dropped item is our draggable whatever that might be
                                        var dropped = ui.draggable;

                                        var droppedOn =$(this).css({backgroundColor: "aliceblue"});
                                         //this is the place we want to drop the item on
                                         //as we used class goalsBlocks it means it is every element with that class
                                        // var droppedOn = 
                                         //when the item is dropped we detach it from its original location and append to our droppable
                                        $(dropped).detach().css({top: 0, left: 0 }).appendTo(droppedOn);
        }});
    }
    droppableGoals();


   // var lifeGoalsPosition = $("#lifeList").position().top;

    //actions taken on first buton click
    $('#listCompleteButton').click(function () {

        //textarea for goals disappears
        $('#lifeList').fadeOut(300, function () {
            $('#tdForTextArea').css("width", "50%");
            $('#goalsBtnDiv').fadeIn(3000);

            //this variable split content of textarea on every carriage return character detected
            var lines = $('#lifeList').val().split(/\n/g);      //Split the lines
            for(var i=0; i < lines.length; i++){

                //Loop through the Array
                goal = $('<li/>').addClass("goalDraggable")
                                    //we make this item draggable
                                    .draggable(
                                        {scope: "tasks", //adding scope so it can be dropped only on selected droppables
                                         scroll: 'true',
                                         stack: ".goalDraggable",
                                         start: function(event, ui) {
                                            $(this)
                                                .css({fontWeight: "bold",
                                                      backgroundColor: "aliceblue",
                                                      padding: "5px",
                                                      fontSize: "130%",
                                                      borderRadius: "20px"}); },
                                         stop: function(event, ui) {
                                            $(this)
                                                .css({fontWeight: "normal",
                                                      backgroundColor: "inherit",
                                                    fontSize: "inherit",
                                                      padding: 0}); },
                                         revert: "invalid", //this means it will go back to its location if dropped incorrectly
                                         revertDuration: 100});
                goal.html(lines[i]);
                
                //animate all new objects
                $('#lifeGoals').append(goal);
                $('#lifeGoals').prev('.description').fadeIn(1000).css('color','red');
                $('#5yearsGoals').prev('.description').fadeIn(1000).css('color','red');
                $('#5yearsGoals').fadeIn(1500).append(instruction.show().delay(1000).slideUp(1000));
            }
            
            //when loop finishes we animate addiional  objects
            $('#lifeGoals').fadeIn(1500);
            $('#5yearsCompleteButton').fadeIn(1500);
            $('#5yearsTitle').fadeIn(1500);  
        });
        //at the end of the callback clicked button will hide
        $(this).slideUp(300);
      });

    $("#goalsFixedButton").click(function () {
        $('html, body').animate({
            scrollTop: $('#lifeListTitle').offset().top - 20
        }, 'slow');
    });


    var firstDescriptionVisible = true;
    function hideFirstDescription(){
        var description = $('#tdForTextArea p');
        console.log(description);

        var parent = $(description).parent();
        console.log(parent);

        $(parent).prepend(
            $('<details/>').attr({close:'', id: 'firstDescriptionResults'}).append(
                $('<summary/>').text("Description Hidden")
            )
        );

        $(description).detach()
            .appendTo($('#firstDescriptionResults'));
        $(description).css('color','black');
        firstDescriptionVisible = false;
    }

    //function for each submit button actions
    function buttonClickChanges(buttonClicked, newButton, newGoals, title) {
        $(buttonClicked).click(function () {

            if(firstDescriptionVisible)
            {
                hideFirstDescription();
            }

            //first all other decription text will go black
            var parent = $(this).parent();
            //console.log(parent);
            var thisName = title.attr('id')+"Results";
            //console.log(thisName);


            $(parent).prepend(
                $('<details/>').attr({close:'', id: thisName}).append(
                    $('<summary/>').text("Description Hidden")
                )
            );
            var description = parent.find('p').css('class',',description');
            //console.log(description);


            $(description)
                .animate({"color":"black"}, {complete: function () {


                    //when it's done new description will apear red
                    newGoals.prev('.description').fadeIn(500).css('color','red');
                    //then we show the title and scroll our page to it
                    title.fadeIn(500);
                    newButton.fadeIn(500);

                    newGoals.fadeIn(200, function() {
                            $(this).append(instruction.show().delay(2500).slideUp(1500))
                        });

                    $('body').stop(true,false).animate({
                    scrollTop: $(title).offset().top},
                    1000);

                }});

            $(description).detach()
                .appendTo($('#'+thisName));
            $(buttonClicked).slideUp(500);
        });
    }
    
    //calling button action methods for each part of the page
    buttonClickChanges($('#5yearsCompleteButton'), $('#2yearsCompleteButton'), $('#2yearsGoals'), $('#2yearsTitle'));
    buttonClickChanges($('#2yearsCompleteButton'), $('#1yearCompleteButton'), $('#1yearGoals'),$('#1yearTitle'));
    buttonClickChanges($('#1yearCompleteButton'), $('#6monthsCompleteButton'), $('#6monthsGoals'), $('#6monthsTitle'));
    buttonClickChanges($('#6monthsCompleteButton'), $('#3monthsCompleteButton'), $('#3monthsGoals'), $('#3monthsTitle'));


    //final submission actions must be different
    $('#3monthsCompleteButton').click(function (){
       
        $('.description').animate({"color":"black"}, {complete: function () {
                //final description to be displayed with further instructions
                $('#finalDescription').fadeIn(1500).css('color','red');
            }});

        var parent = $(this).parent();
        console.log(parent);
        var thisName = "finalDescriptionResults";
        console.log(thisName);


        $(parent).prepend(
            $('<details/>').attr({close:'', id: thisName}).append(
                $('<summary/>').text("Description Hidden")
            )
        );
        var description = parent.find('p').css('class',',description');
        console.log(description);
        $(description).detach()
            .appendTo($('#'+thisName));

        $('#goalsCompleteButton').fadeIn(1500);

        $('body')
            .stop(true,false)
            .animate({
                scrollTop: $('#goalsCompleteButton').offset().top},
                1000);

        $(this).slideUp(500);
        instruction.remove();
    });





    var finalGoalsLists = $("<div/>").attr('id','testResults');
    //clicking on the final button will create PDF file and open the page to print it
    $('#goalsCompleteButton').click(function () {

        //adding content of the results page
        $("#lifeListTitle").appendTo(finalGoalsLists);
        $('#lifeGoals').appendTo(finalGoalsLists);
        $("#5yearsTitle").appendTo(finalGoalsLists);
        $('#5yearsGoals').appendTo(finalGoalsLists);
        $('#2yearsTitle').appendTo(finalGoalsLists);
        $('#2yearsGoals').appendTo(finalGoalsLists);
        $("#1yearTitle").appendTo(finalGoalsLists);
        $('#1yearGoals').appendTo(finalGoalsLists);
        $('#6monthsTitle').appendTo(finalGoalsLists);
        $('#6monthsGoals').appendTo(finalGoalsLists);
        $('#3monthsTitle').appendTo(finalGoalsLists);
        $('#3monthsGoals').appendTo(finalGoalsLists);

       /* console.log(finalGoalsLists);
        console.log(finalGoalsLists.html());*/

        //localStorage.setItem("testResults", finalGoalsLists.html());
        $('#testResults').val($(finalGoalsLists).html());
        //$.post('../results/results.php', {goalsComplete: $(finalGoalsLists).html()});

        //$.load('../results/results.php');
        window.location.replace("../results/results.php");



});







});