

// add comments
var numbers;
var timer;
var commentsData;
var divFooter = document.getElementsByClassName("rightCorner")[0];

function addComments() {
  commentsData = [
    'Offering formal flexible schedules (not one that feels like your manager is doing you a favor), highly capable women with high EQ in the c-suite and in leadership positions, more participation from the women in leadership positions (i.e., in WLF), more woman-woman support at all levels of the company, deep dive into conscious bias training, real career development for women, sponsorship programs, etc.',
 'The PTO policy is a joke for anyone who has a family - mixing sick and vacation time, and then being chintzy with it is not family friendly. Neither is keeping the office open for holidays that are standard everywhere else (like the day after thanksgiving, days around Christmas). I\'m fortunate that my manager is very flexible, but this is in spite of, not because of, the official policies. As a parent of a young child with a husband that also works it\'s extremely stressful to think that my annual vacation could be cut short because my child is sick for a week and can\'t go back to daycare (usually followed by me getting sick too). When I do have to stay home with a sick child, I simply say that I\'m "working from home" and stay online even though it is literally impossible to give work the attention I should. Why make your employees play this game?',
 'Provide career path for women. Provide equal pay for women same like their male cohorts. Promote women to leadership roles. Make work environment flexible for women and moms',
 "Although we have a flexible work-life balance (which I love), sometimes it is up to the discretion of the individual's manager.  I am extremely lucky to have a manager who is flexible with allowing me work from home when I need it.  But my previous manager was not so understanding. ",
 "I don't feel the company or it's leadership supports this at all. If you are telecommuting or need to exercise flexibility because of personal issues , there are adverse impacts to your career. In fact, I've had HR reach out to me after having to work from home because of a medical issue and essentially state that I should to look into unpaid disability options. In the modern workforce, this type of response greatly impacts the company's ability to retain a diverse talent base. ",
 'Plenty of workspace flexibility which attracted me and keeps me and others at Athena--very important in this day and age.  I can very effectively work remotely should there be childcare issues.  Thanks for being a great company in this regard.',
 'One of the best parts about working at athenahealth is the flexibility the company provides. Its help promote work-life balance and is accommodating when life happens. It is one of the best and unique parts about the culture. ',
 "The flexibility on teams widely varies by manager but I think that many times this is due to job needs. I personally haven't had issues with flexibility at work. ",
 'There is very limited workplace flexibility when it comes to telecommuting in positions where it is very easy to do so. ',
 'Give every employee the option to regularly work from home one day a week (as long as their role permits it) in order to equalize and normalize the ability to have a flexible schedule to meet family and other needs.',
 'Personally, for me, it\'s gotten a lot better. Three years ago, I had a manager (who has, thankfully, since left) who thought he was being generous when he let us work from home once a week. I had actually started looking for another job. Now I work remote full time because my office closed, but I don\'t know if everyone here is so lucky when it comes to workplace flexibility. I hear that in the Athena offices, the culture is "work from work," and that the number of days people are allowed to work from home is up to their managers. For people with long commutes (I used to spend 4 hours/day commuting), having to go to the office even 4 days/week can be physically and emotionally draining.',
 "We have a very flexible work-from-home policy, but it's impossible to develop relationships, network, or take advantage of opportunities to learn new skills or participate in organic conversations (usually the most interesting ones) when they happen in the hallway after a meeting.  It's also challenging to give/receive feedback (critical to career development) in a remote environment.  At junior cohorts the policy works well, but leaves more senior folks underserved and frustrated.  With frequent management changes, it's critical to be in the office building new relationships and understanding expectations because the people who will ultimately evaluate you turnover so frequently.  With more management/executive stability, remote options may become more appealing. ",
 "Workplace flexibility is the best that I have experienced. It's one of my most highly praised and coveted benefits. I am a single parent of a young child so the option to work from home or take a last minute day off is so important. I do not feel additional pressure to make it in to the office on a sick or snow day and fear that my job may be in jeopardy for taking advantage of WFH. My manager encourages an atmosphere of understanding and accommodation.  ",
 '1. Identify the teams where people of all genders are valued, given the flexibility they need, and advanced based on merit and not based on gender. What are they doing right?  2. Identify teams where the inverse is happening and hold them accountable to change their behaviors and take on the best practices from teams that have "gotten it right". Ensure options and behaviors are consistent across the organization. Be willing to take disciplinary action or even TERMINATE any managers or leaders who are not actively proving that they\'re changing.  3. Make it clear that harassment, assault, and discrimination are all ILLEGAL and are not optional. This was blurred by how the company handled Jon Bush\'s news and termination, and damage has been done. Leadership/HR needs to acknowledge this and make it crystal clear (beyond just 1 obscure commons post that likely most of the company missed). I do not feel comfortable going to the teams listed below after they were not as supportive as I needed them to be after the events of the past few weeks with JB. I had to seek external support resources in order to personally get through these events and I do not trust the teams and resources listed below.',
 "Seeing as wfh policies are set by individual managers, its very difficult to comment on how this works outside of my immediate vicinity.  But I can say that from what I've seen, flexibility appears to be good.",
 'Workplace flexibility has always been great on my team but seems to vary widely team by team. ',
 "Love that we have very flexible policy for those who have children in terms of scheduling / Nursing mothers' rooms availability in office.",
 'I have tried to provide workplace flexibility within good business parameters with very good results. Teams appreciate being treated as adults and are allowed to perform/produce with some flexibility for better work life balance.',
 'Everyone loves our workplace flexibility. ',
 'There is a tremendous amount of flexibility, but it is specific to teams, departments and roles. I do not believe there is an overall company policy which may be beneficial to ensure everyone has a similar approach.  '
  ];

  console.log(commentsData.length);
  var list = document.getElementsByClassName('gradient-list')[0];
  var newLI = document.createElement('li');
  newLI.innerHTML = commentsData[numbers];
  list.appendChild(newLI);
  setTimeout(function () {
    newLI.className = newLI.className + " show";
  }, 10);

  if (numbers === commentsData.length - 1) {
    clearInterval(timer);
  }

  // div Scroll Down
  divFooter.scrollTop = divFooter.scrollHeight;

  numbers += 1;
}

function loadComments() {
  numbers = 0;
  
  timer = window.setInterval(addComments,1000);
}