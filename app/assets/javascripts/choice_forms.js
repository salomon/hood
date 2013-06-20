
$(document).on('ajax:success', '.new_choice', function(event, data){
   var choiceTemplate = $($('.choices-listing-template').find(':first-child')[0]);
   newChoice = choiceTemplate.clone();
   newChoice.removeClass('hidden');
   newChoice.find('form').attr('action', data.path);
   newChoice.find('form h1 label').text(data.choice.content);
   $('.choices-listing').append(newChoice);
   $('#choice_content').val("");
});


$(document).on('ajax:success', '.choice_vote', function(event, data){
	var choiceVotes = $(this).find('.vote_count');
  choiceVotes.text(data.votes); 
}); 

$(document).on('click','.new_comment_button', function(event){
	event.preventDefault();
	$('.comment_form').removeClass('hidden');
	$(this).hide();
});

$(document).on('ajax:success', '.new_comment', function(event, data){
 var commentTemplate = $('.comment-template');
 var newComment = commentTemplate.clone();
 newComment.removeClass('hidden');
 newComment.find('img').attr('src', data.image_url);
 newComment.find('h3').text(data.comment.content);
 $('#comment').append(newComment);
 $('#comment_content').val("");
 $('.new_comment_button').show();
 $('.comment_form').addClass('hidden');
});