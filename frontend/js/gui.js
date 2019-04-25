var $topic = $('#topic')
var $screen = $('.container')
var $newTopic = $('.tertiary')
var $extendTopic = $('.secondary')
var $experiment = $('#test')
var $alert = $('.no_questions')

$(function(){
    creation_option('#mainTopicBtn');
})

/*topics and questions*/
var questions_test = {

  technology: ['Is human cloning justified, and should it be allowed?', 'What pros and cons of the advent of the AI(Artificial Intelligence)?', 'Will virtual reality replace the actual one?', 'Does our speed of progress increase with time?', 'Is there a limit in scientific discoveries?', 'Do technologies break the bond of renewal between humans and nature?', 'Can you think of any technology that has only made the world worse?', 'Should animals be used for scientific experiments?'],
  medicine: ['Should marijuana be a medical option?', 'What was the most significant achievement in overcoming the diseases?', 'What would the world be today without antibiotics?', 'Do you believe in a panacea?'],
  society: ['Are beauty pageants a way to objectifying women?', 'What can we do about racism?', 'Is there any way to decrease social stratification?', 'Why does the poverty still exist?', 'Where do you stand on LGBTQ community?', 'If you had to add something to humanity, what would your contribution be?', 'Are fandoms bad?', 'Is the death penalty appropriate?  Or should it be banned?', 'Which one is a more complicated gender: men or women?'],
  age: ['Have you ever noticed generation gap?', 'Is it right to say: wisdom comes with aging?', 'Are there some advantages of being old?', 'What are the most vital factors in aging?', 'Should we decrease the general retirement age?'],
  resources: ['Should plastic-eating microbes be used in place of recycling?', 'Can we get rid of petroleoum?', 'Do you believe in perspective of restorable sources of energy?', 'Should we use electric cars?', 'Sources of plastic are fizzling out,what are we going to do?', 'Is it profitable to recycle?'],
  health: ['Is the government hiding the cure for cancer?', 'Should junk food be banned?', 'Should the drinking age be raised?', 'Are genetically modified foods beneficial?', 'Should vaccines be mandatory?', 'Should we become Vegans?', 'Is alcohol becoming as deadly as smoking?', 'Is there a correlation between longevity and nutririon?'],
  fashion: ['Can designers come up with a brand-new pattern for clothes?', 'Is it justifiable that a lot of models are suffering from anorexia?', 'How much money are you willing to pay for an attire?'],

}
/**********************/

var randomization = function (obj) { //trying to pre-randomize properties in objects
  var keys = Object.keys(obj)
  for (var i = keys.length - 1; i >= 0; i--) {

    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = keys[randomIndex];

    keys[randomIndex] = keys[i];
    keys[i] = itemAtIndex;
  }
  return keys
}
var shuffled = randomization(questions_test)
var arrayOfTopics = []

var pickProperty = function (obj, obj2) { //picking a first element, then replace as the last one
  arrayOfTopics = obj.splice(0, 1)
  console.log(arrayOfTopics)
  obj.splice(obj.length, 0, arrayOfTopics[0])
  return obj2[arrayOfTopics[0]]
}

var new_arr = pickProperty(shuffled, questions_test).slice(0)
var duplicate = new_arr.slice(0)

var getquestion = function () {

  get_question = new_arr[Math.floor(Math.random() * new_arr.length)]
  var indexOfQuestion = new_arr.indexOf(get_question)

  if (new_arr.length > 0) { //trying to avoid repeating of questions 
    new_arr.splice(indexOfQuestion, 1)
  }
}

var shownAnswer = false
var showntopic = false
var clicked = false



/*animation classes */
var anim_classes = {
  bounce: 'animated bounceInDown',
  animationEnd: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  bounceOutLeft: 'animated fadeOutUp',
  bounceInLeft: 'animated zoomInUp',
  fadeOutef: 'animated fadeOut',
  fadeInef: 'animated fadeIn'
};

/******************/

$('.primary,.tertiary').on('click', mainfunc)

function mainfunc () {

  $experiment.empty()
  $topic.show()
  $topic.removeClass(anim_classes.bounceOutLeft)
  getquestion()
  if (!showntopic) {
    $topic.addClass(anim_classes.bounce).one(anim_classes.animationEnd, function () {
      $topic.removeClass(anim_classes.bounce)
      test()
    })
    showntopic = true
  }

  if (!$topic.hasClass('animated')) {
    test()
  }
  if (!clicked) {
    $('.main-button').transition({
      transform: 'translateY(200px)'
    }, 1200, function () {
      $screen.fadeIn(1000);

      $('.primary, .primary1').addClass(anim_classes.fadeOutef).one(anim_classes.animationEnd, function () {
        $('.primary, .primary1').hide();
        $('.tertiary,.secondary').show();
        $('.tertiary,.secondary').addClass(anim_classes.fadeInef);
      })

      clicked = true
    })
  }

}

$('.secondary').on('click', function () {

  new_arr = pickProperty(shuffled, questions_test).slice(0)
  duplicate = new_arr.slice(0)
  $experiment.empty()
  getquestion()
  test()
  console.log('The button \'extend\' is clicked')
  $
  .addClass(anim_classes.bounceOutLeft).one(anim_classes.animationEnd, function () {

    $topic.text(arrayOfTopics)
    $topic.removeClass(anim_classes.bounceOutLeft)
  })
})

$('.new_topic').on('click', function () {
  new_arr = pickProperty(shuffled, questions_test).slice(0)
  duplicate = new_arr.slice(0)
  $('.whole_page').addClass(anim_classes.fadeOutef).one(anim_classes.animationEnd, function () {
    $(this).removeClass(anim_classes.fadeOutef)
    $(this).hide()
  })
  $alert.addClass('animated bounceOutUp').one(anim_classes.animationEnd, function () {
    $(this).removeClass('animated bounceOutUp')
    $(this).hide()
  })
  $experiment.empty()
  getquestion()
  test()
  console.log('The button \'extend\' is clicked')
  $topic.addClass(anim_classes.bounceOutLeft).one(anim_classes.animationEnd, function () {
    $topic.text(arrayOfTopics)
    $topic.removeClass(anim_classes.bounceOutLeft)
  })
})
	
	
	
	

	
	