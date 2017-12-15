var questions_test = {

  technology: ['Is human cloning justified, and should it be allowed?', 'What pros and cons of the advent of the AI(Artificial Intelligence)?', 'Will virtual reality replace the actual one?', 'Does our speed of progress increase with time?', 'Is there a limit in scientific discoveries?', 'Do technologies break the bond of renewal between humans and nature?', 'Can you think of any technology that has only made the world worse?', 'Should animals be used for scientific experiments?'],
  medicine: ['Should marijuana be a medical option?', 'What was the most significant achievement in overcoming the diseases?', 'What would the world be today without antibiotics?', 'Do you believe in a panacea?'],
  society: ['Are beauty pageants a way to objectifying women?', 'What can we do about racism?', 'Is there any way to decrease social stratification?', 'Why the poverty still exists?', 'Where do you stand on LGBTQ community?', 'If you had to add something to humanity, what would your contribution be?', 'Are fandoms bad?', 'Is the death penalty appropriate?  Or should it be banned?', 'Who is more complicated gender: men or women?'],
  age: ['Have you ever noticed generation gap?', 'Is it right to say: wisdom comes with aging?', 'Are there some advantages in being old?', 'What are the most vital factors in aging?', 'Should we decrease the general retirement age?'],
  resources: ['Should plastic-eating microbes be used in place of recycling?', 'Can we get rid of petroleoum?', 'Do you believe in perspective of restorable sources of energy?', 'Should we use electric cars?', 'Sources of plastic are fizzling out,what are we going to do?', 'Is to profitable to recycle?'],
  health: ['Is the government hiding the cure for cancer?', 'Should junk food be banned?', 'Should the drinking age be raised?', 'Are genetically modified foods beneficial?', 'Should vaccines be mandatory?', 'Should we become Vegans?', 'Is alcohol becoming as deadly as smoking?', 'Is there a correlation between longevity and nutririon?'],
  fashion: ['Can designers come up with a brand-new pattern for clothes?', 'Is it justifiable that a lot of models are suffering from anorexia?', 'How much money are you willing to pay for an attire?'],

}

$(function () {
  $("#stars-existing button").click(function () {
    var $star = $(this);
    var currId = parseInt($star.attr('id'), "10");
    if($star.attr('class').indexOf('active') != -1){
      $star.css("color", "grey");
      $star.removeClass("active");
      for (var i = currId; i <= 5; i++) {
        var $sibl = $("#" + i);
        $sibl.css("color", "grey");
        $sibl.removeClass("active");
      }
    } else {
      $star.css("color", "yellow");
      $star.addClass("active");
      for (i = currId; i >= 1; i--) {
        $sibl = $("#" + i);
        $sibl.css("color", "yellow");
        $sibl.addClass("active");
      }
    }
  });


});

