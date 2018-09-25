$("#create-3").on("click", function(event){
    $.ajax({
        type: "POST",
        url: "/create-3",
        data: {project_title: $(".title-input").val(), description: $(".desc-input").val()},
        success: function(data){
            $("body").html(data);
        }
    });
});

