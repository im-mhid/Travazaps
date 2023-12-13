async function enviarScript(scriptText) {
  const lines = scriptText
    .split(/[\n\t]+/)
    .map(line => line.trim())
    .filter(line => line)
  ;(main = document.querySelector('#main')),
    (textarea = main.querySelector(`div[contenteditable="true"]`))

  if (!textarea) throw new Error('Não há uma conversa aberta')

  for (const line of lines) {
    console.log(line)

    textarea.focus()
    document.execCommand('insertText', false, line)
    textarea.dispatchEvent(new Event('change', { bubbles: true }))

    setTimeout(() => {
      ;(
        main.querySelector(`[data-testid="send"]`) ||
        main.querySelector(`[data-icon="send"]`)
      ).click()
    }, 100)

    if (lines.indexOf(line) !== lines.length - 1)
      await new Promise(resolve => setTimeout(resolve, 250))
  }

  return lines.length
}

enviarScript(`








AVATAR
written  by James Cameron
































ALL RIGHTS RESERVED. COPYRIGHT ©2007 TWENTIETH CENTURY FOX FILM CORPORATION. NO PORTION OF THIS SCRIPT MAY BE PERFORMED, PUBLISHED, REPRODUCED, SOLD, OR DISTRIBUTED BY ANY MEANS, OR QUOTED OR PUBLISHED IN ANY MEDIUM, INCLUDING ANY WEB SITE, WITHOUT THE PRIOR WRITTEN CONSENT OF TWENTIETH CENTURY FOX FILM CORPORATION.

THE SOUND OF DRUMS, from a great distance, growing louder. FADE IN:
WE ARE FLYING through mist, a dimly glimpsed forest below.

VOICE (V.O.)
When I was lying there in the VA hospital, with a big hole blown through the middle of my life, I started having these dreams of flying.

We are very low over the forest now, gliding fast, the drums BUILDING to a PEAK --

VOICE (V.O.)
Sooner or later though, you always have to wake up...
CUT TO:

EXT. CITY - NIGHT

A SCREECH OF BRAKES as a vehicle WIPES FRAME, revealing --

JAKE SULLY, a scarred and scruffy combat vet, sitting in a beat up carbon-fiber wheelchair. At 22, his eyes are hardened by the wisdom and wariness of one who has endured pain beyond his years.

Jake stares upward at the levels of the city. MAGLEV TRAINS WHOOSH overhead on elevated tracks, against a sky of garish advertizing.

JAKE (V.O.)
They can fix a spinal, if you’ve got the money. But not on vet benefits, not in this economy.

The traffic light changes and Jake pushes forward with the crowd, pumping the wheels of his chair. Most of the people wear FILTER MASKS to protect them from the toxic air. In a LONG LENS STACK it is a marching torrent of anonymous, isolated souls.

INT. JAKE’S APARTMENT - NIGHT

The room is a tiny CUBICLE, prison cell meets 747 bathroom. Narrow cot, wall-screen droning away in the B.G. --

PERKY NEWSCASTER
The Bengal tiger, extinct for over a century, is making a comeback. These cloned tiger cubs at the Beijing Zoo are...



Jake laboriously pulls his pants off -- rocking to one side, pushing the fabric down past his hip, then rocking to the other, and so on.

His legs are white and atrophied. Utterly useless. But his arms are tattooed and powerfully muscled. A “Born Loser” tattoo prominent on his shoulder.

JAKE (V.O.)
I became a Marine for the hardship. To be hammered on the anvil of life. I told myself I could pass any test a man can pass.

Jake struggles with his pants a long time.
CUT TO:

INT. ROWDY BAR -- NIGHT

Not the kind of place you’d bring your mom.

We find Jake near the pool table, BALANCING his chair, front wheels off the ground, while holding a tequila shot on his forehead. ONLOOKERS, including some other disabled vets, CLAP and WHOOP.

Jake grabs the glass, SLAMS down the shot as they cheer.

A WALL-SIZED SCREEN filled with the World Cup game -- men RUNNING on antelope legs.

CU JAKE, watching what he can’t have. Expression stony.

JAKE (V.O.)
Let’s get it straight up front. I don’t want your pity. I know the world’s a cold-ass bitch.

Jake’s eyes shift -- HIS POV, seeing the bar through gaps in the crowd. A MAN on a barstool SLAPS the WOMAN he’s with.
Hard. She cowers but he’s got her arm, shouting, raising his fist. An eternal tableau. People look away.

CU JAKE -- not looking away.

JAKE (V.O.)
You want a fair deal, you’re on the wrong planet. The strong prey on the weak.

TIGHT ON JAKE’S HAND as he starts pushing the wheel of his chair.

TRACKING WITH HIM as he rolls forward.



JAKE (V.O.)
It’s just the way things are. And nobody does a damn thing.

Jake stops, unnoticed, next to the bullying man. He leans down and grabs one leg of the man’s barstool -- and YANKS.

The chair flips. The guy goes down HARD and --

JAKE hurls himself from the wheelchair, toppling on the guy, getting a grip on him like a pit bull and PUNCHING the crap out of him, right there on the floor.

THE BOUNCER jumps in, trying to drag him off and it goes into SLOW MOTION, everybody yelling and pulling...

JAKE (V.O.)
All I ever wanted in my sorry-ass life was a single thing worth fighting for.
CUT TO:

EXT. ALLEY BEHIND BAR -- NIGHT

THE BOUNCER hurls Jake out the door, sending him SPRAWLING on the pavement. A moment later, his chair CRASHES down on him, banging across the alley, landing in the trash.

Jake struggles to rise on one elbow. He’s bleeding and bruised, but still crazed and ready to fight.

JAKE
I hope you realize you’ve just lost a customer!

He collapses onto his back, panting.

JAKE
(to himself) Candy ass bitch.

He stares upwards at the levels of the city. MAGTRAINS ROAR overhead. It starts to RAIN. He just lies there, blinking -- then shouts jauntily to no one in particular --

JAKE
If it ain’t rainin’ we ain’t trainin’!

CAMERA PULLS BACK high and wide, as Jake lies spread-eagled amongst the trash, getting drenched.

TWO LONG SHADOWS enter FRAME, coming to rest across him.



Jake sees two pairs of SHINY SHOES stop next to him. He squints up at --

TWO MEN. Matching suits. Their features unremarkable and blandly threatening in the way of FBI agents and auditors.

AGENT 1
Are you Jake Sully?

JAKE
Step off. You’re ruinin’ my good mood.

AGENT 2
It’s about your brother.
CUT TO:

INT. MUNICIPAL CREMATORIUM - NIGHT

DOWN-ANGLE on a large rectangular cardboard box. HANDS ENTER FRAME, pulling open the top to reveal a DEAD MAN’S FACE. He looks EXACTLY like a clean-shaven version of Jake. His IDENTICAL TWIN -- TOMMY.

JAKE (V.O.)
The strong prey on the weak. A guy with a knife took all Tommy would ever be, for the paper in his wallet.

WIDER, showing Jake and the two agents in a high tech CREMATORIUM -- a row of stainless steel furnaces. Jake stares down at his own face.

JAKE
Jesus, Tommy.

JAKE (V.O.)
The Suits’ concern was touching.

AGENT 1
Your brother represented a significant investment. We’d like to talk to you about taking over his contract.

The ATTENDANT closes the box and seals it with a tape dispenser, like it’s a package for shipping. The cardboard coffin is rolled into the furnace.

JAKE (V.O.)
The egghead and the jarhead.	Tommy was the scientist, not me. He was the one who wanted to get shot light years out into space to find the answers.



PUSHING IN ON JAKE as he watches, bathed in orange light.

JAKE (V.O.)
Me -- I was just another dumb grunt gettin’ sent someplace I was gonna regret.

INSIDE THE FURNACE the burners quickly eat away the cardboard; TOMMY’S FACE is, for a moment, wreathed in flame but not touched by it, as we --
DISSOLVE TO:

JAKE’S FACE, in icy darkness. CLOSE ON his eyes -- they OPEN suddenly, and he takes a sharp breath.

JAKE’S POV -- the inside of a metal coffin. A SERVO WHINE and we are moving, emerging into a large chamber --

INT. CRYO VAULT

JAKE’S POV -- A TECH in medical scrubs FLOATS WEIGHTLESSLY toward us. Wherever we are, we’re not on Earth.

Jake squints as the lights flicker on, revealing --

WIDE SHOT -- the multi-tiered CRYO VAULT. Hundreds of CRYO- CAPSULES are opening like morgue drawers, as med techs pull themselves about in ZERO-G, tending to their patients.

JAKE
(a hoarse whisper) Are we there?

MED TECH
We’re there, Sunshine.

TIME CUT -- SCORES OF PEOPLE emerge from their cryo-capsules in ZERO-G. Pale spirits of the dead rising from rows of open coffins.

The MED TECH floats among them, using his announcement voice.

MED TECH
People, you have been in cryo for five years, nine months and twenty two days. You will be hungry, you will be weak. If you feel nausea, please use the sacks provided for your convenience. The staff thanks you in advance.



FOLLOWING JAKE as he pushes away from his capsule, gliding to the LOCKERS across the aisle, his paralyzed legs not an impediment in weightlessness.
CUT TO:

EXT. SPACE

Against the cold infinity of stars glides an INTERSTELLAR SPACECRAFT -- ISV VENTURE STAR. As it moves past like an endless train, we realize this thing is ENORMOUS -- over half a mile long. PAN WITH IT 180 to REVEAL --

A GAS-GIANT PLANET called POLYPHEMUS, ringed with dozens of moons which cast beauty-mark shadows on its vast face.

The ISV diminishes away from us toward the largest MOON-- a blue and surprisingly Earth-like world called PANDORA. The ship dwindles to a speck against the BLUE MOON.
CUT TO:

EXT. PANDORA ORBIT

ISV Venture Star drifts above a spectacular vista -- the sapphire seas and unfamiliar continents of Pandora.

CLOSE ON ISV -- two massive “VALKYRIE” SHUTTLES are mated to a DOCKING NODE. One of them separates from the starship and moves away, its thrusters FIRING in short bursts.

As the shuttle moves away, descending toward Pandora, we hear the sound of DRUMS, building, louder and louder until we--
CUT TO:

EXT. RAINFOREST - TWILIGHT

FLYING OVER A LANDSCAPE of massive cliffs and towering mesas carpeted in rainforest. Great scarves of cloud swirl around the mesa tops. A primeval landscape, vast and forbidding.

The trees are alien, the color too cyan. There are waterfalls, rivers, and distant flocks of WINGED CREATURES.

Suddenly the carpet of virgin rainforest gives way to --

AN OPEN-PIT MINE. A lifeless crater -- as if a giant cookie- cutter took a chunk out of the world. Down among the terraces are EXCAVATORS and TRUCKS the size of three story buildings.

And beyond the mine is the HUMAN COLONY --



EXT. HELL’S GATE - TWILIGHT

HELL’S GATE is a cluster of squat concrete and steel structures surrounded by chain-link FENCE 10 meters high, topped with razor wire.

At the corners are towers with automated SENTRY GUNS swiveling on servo mounts.

Visible beyond the gun towers, the VALKYRIE SHUTTLE roars in across the treetops. VECTORING NOZZLES change angle, bringing the ship to a SLOW HOVER.

EXT. RAIN FOREST - TWILIGHT

Through a screen of jungle canopy, we see the VALKYRIE thunder overhead. Camera TILTS with it until leaves block the view.

A BLUE INHUMAN HAND reaches INTO SHOT, parting the foliage to reveal the shuttle hover-taxiing across the compound.

REVERSE -- ECU of two intense, cat-like golden EYES watching. INT./EXT. SHUTTLE
The CREW CHIEF stomps down the aisle yelling --

CREW CHIEF
Exopacks on!

Passengers don their EXO-PACK breathing gear with practiced moves. Everybody except JAKE, who’s turning his this way and that trying to figure out the straps.

CREW CHIEF
Remember people, you lose your mask you’re unconscious in 20 seconds and you’re dead in four minutes. Let’s nobody be dead today, it looks bad on my report.
The crew chief stops by Jake long enough to bark -- CREW CHIEF
Exopack on, let’s go!

BENEATH THE SHUTTLE air blasts outward for a hundred meter radius as it settles onto its landing gear.

INSIDE everybody is queued up in the aisles, with duffles ready. Rows of tense, expectant faces in breathing masks -- and we DIP DOWN to find Jake, wheelchair putting him at the level of everyone else’s WAISTS.



THE CARGO RAMP OPENS with a hydraulic whine.

CREW CHIEF
Go directly into the base! Do not stop! Go straight inside!

HAND-HELD, running with the arriving colonists who double time down the ramp. They jog across the exposed apron toward a walkway covered in CHAINLINK which leads to the complex.

Inside the chain-link tunnel are a couple of SEC-OPS TROOPERS, CORPORAL LYLE WAINFLEET and PRIVATE FIKE. Sec-Ops
is the colony’s private security force. These guys are laid
back, hardened, and haggard.

WAINFLEET
Look at all that new meat.

THEIR POV -- Jake rolls down the ramp.

FIKE
Check it out, man. Meals on wheels.

WAINFLEET
That is just wrong.

Jake, pumping his chair, looks around as --

A huge TRACTOR, taller than a house, ROARS past on muddy wheels. He notices something sticking in the tires -- ARROWS. The neolithic weapons are jarring amid all the advanced technology.

Beyond the tractor, two VTOL vehicles take off. Armored and heavily armed, they are AT-99 “SCORPION” GUNSHIPS.

MITSUBISHI MK-6 AMPSUITS -- human operated walking machines 4 meters tall -- patrol the perimeter. They are heavily armored, and armed with a huge rotary cannon called a GAU-90.

Beyond the outer fence stands a black wall of forest hundreds of feet high. A SENTRY GUN OPENS FIRE from a tower. TRACERS light up the twilight. A shadowy SHAPE SHRIEKS and drops off the fence. It is an armed camp in a state of siege.

WAINFLEET and Fike give Jake and his chair the hairy eyeball as he approaches.

JAKE
What’re you two limpdicks starin’ at?

As Jake rolls past, SOMETHING SWOOPS down behind him and --



K-KRASH! SMASHES against the chain-link right next to his head.

A vicious AERIAL PREDATOR a meter across gnashes glass fangs against the steel. It STABS at him through the chain link with a tail ending in a glistening stiletto. A STINGBAT.

WAINFLEET casually BLASTS IT with his PISTOL. It drops off the fence, tail still lashing.

WAINFLEET
Seen a lotta guys leave this place in a wheelchair. Never seen anybody show up in one.

Jake stares at the gnashing fangs of the dying alien.

ON A WALKWAY of the OPS CENTER, seen from above, a UNIFORMED FIGURE grips the railing, watching Jake pump his chair through the tunnel below.

The hair is clipped short. The scalp is etched by long parallel SCARS where some Pandoran denizen’s claws raked across it. The bare arms, below tightly rolled sleeves, seem hewn out of some hard tropical wood. Criss-crossed by scars.

The MAN raises his masked face to look at the sky. He eyes are an icy steel gray.

HIS POV -- the mighty POLYPHEMUS seems to fill the sky, beyond the clouds.


MAN (V.O.)
You are not in Kansas any more...


INT. COMMISSARY - TWILIGHT


CUT TO:


THE MAN from the balcony -- COLONEL MILES QUARITCH -- is the HEAD OF SECURITY for the Hell’s Gate colony. A hundred new arrivals watch raptly as he paces like a panther across the front of the large cafeteria. He stops, stance wide.

Without his mask, we see that Quaritch’s features are rugged and handsome, except for the SCAR, which runs from scalp to jaw down one side of his face. On one hip he carries a very large PISTOL.

QUARITCH
... You are on Pandora, ladies and gentlemen. Respect that fact every second of every day.



JAKE ROLLS IN, watching from the back.

COLONEL QUARITCH raises his hand and points out the window, toward the dark treeline.

QUARITCH
Out beyond that fence every living thing that crawls, flies or squats in the mud wants to kill you and eat your eyes for jujubees.

The room gets very quiet.

QUARITCH
We have an indigenous population of humanoids here called the Na’vi. They’re fond of arrows dipped in a neurotoxin which can stop your heart in one minute. We operate -- we live -- at a constant threat condition yellow.

PAN ACROSS the solid faces of miners, Cat-machine drivers, engineers, geologists, as they take that in.

QUARITCH
As head of security, it’s my job to keep you alive.	I will not succeed --
(pausing for effect)
-- not with all of you. If you wish to survive, you need a strong mental attitude, you need to follow procedure...

PUSH IN ON JAKE, watching as the briefing continues.

JAKE (V.O.)
Nothing like an old-school safety brief to put your mind at ease.
CUT TO:

INT. CORRIDOR

People are roaming in both directions, looking for rooms, lugging duffels and cases.

An eager young XENOANTHROPOLOGIST, staggering under an overpacked duffel, runs to catch up to Jake.

NORM
Hey, you’re Jake right? Tom’s brother? You look just like him.
(off Jake’s wary look)
Sorry, I’m Norm Spellman, I went through avatar training with him.



Norm offers his hand and Jake shakes it.

NORM
He was a great guy -- funny. It was a big shock to all of us.

JAKE
Yeah.

Jake pumps the wheels of his chair, rolling on. Norm walks with him.


NORM
And duh! -- obviously you look like him. I mean, if you weren’t genetically identical, you wouldn’t be taking over his avatar.

JAKE
That’s why I’m here.

NORM
So -- you want to go check it out?


INT. BIO-LAB - DAY











CUT TO:


JAKE AND NORM enter the BIO-LAB -- a large lab complex with many adjoining rooms.

MAX
Me and Norm were out here to drive these remotely controlled bodies called avatars. They’re grown from human DNA mixed with DNA from the natives here.

A scientist, DOCTOR MAX CULLIMORE, is supervising the uncrating of two SHIPPING CONTAINERS. The nearer has the sides removed, revealing -- a ceiling-height acrylic TANK.

Norm stops to stare, and Jake rolls past him as if drawn by some unseen force, toward --

THE AMNIO TANK. There is a FIGURE floating lanquidly inside, which looks like a man. A very large, very blue, man.

Blood circulates through a synthetic UMBILICAL in the abdomen. As the figure turns in the amniotic fluid, we see that it has a lemur-like TAIL. The skin is cyan-blue. Long black hair drifts, graceful as seaweed.

JAKE
Damn. They got big.



NORM
Yeah, they mature on the trip out. (to Max)
So the proprioceptive sims worked pretty well.

MAX
Yeah, they’ve got great muscle tone. Give us a few hours, you guys can take them for a spin.

THE FIGURE’S sleeping face turns toward us, and the features are -- despite feline ears and a long feral snout -- definitely JAKE’S.

JAKE
It looks like him.

NORM
No, it looks like you. This is your avatar now, Jake.

ON JAKE, mesmerized as he stares into the tank.

JAKE (V.O.)
The idea is -- every driver is matched to his own avatar --

STEREOCAM VIDEO SHOT OF JAKE -- facing the camera, talking directly to the lens. JAKE’S VOICE-OVER up until now has been part of this VIDEOLOG.

JAKE
-- so their nervous systems are in tune. Or something. Which is why they offered me this gig, because I can link with Tommy’s avatar, which was insanely expensive.
(looking off camera)
Is this right? I just say whatever in these videologs?

WIDER, showing Norm working nearby with Max.

NORM
Yeah. You just need to get in the habit of documenting everything -- what you see, what you feel -- it’s all part of the science. Good science starts with good observation.



JAKE
Right.
(to camera)
So, whatever. Here I am. Doing science. (looks around)
Never been in a lab before.

MAX
Log off. It’s time to meet your boss for the next five years.

He leads Jake and Norm through the short corridor to the --
CUT TO:

INT. LINK ROOM - DUSK

The LINK ROOM contains a dozen PSIONIC LINK UNITS, which look like coffins crossed with MRI scanners.

NORM
Grace Augustine is a legend. She's the head of the Avatar Program, and she wrote the book -- I mean literally wrote the book -- on Pandoran botany.

MAX
(low, over his shoulder)
That's because she likes plants better than people.

DR. GRACE AUGUSTINE sits up in her link, stretching and cracking her neck after a long session. She’s fifty, with a strong face and fiercely intelligent eyes.

GRACE
(yelling)
Who’s got my goddamn cigarette?!

A TECH scurries to bring it to her, already lit. Around here they jump when Grace barks.

Grace stands, scowling, as Jake, Norm and Max approach.

MAX
And here she is, Cinderella back from the ball. Grace, I’d like you to meet Norm Spellman and Ja --

GRACE
Norm. I hear good things about you. How's your Na'vi?



NORM
(Na'vi, subtitled)
May the All Mother smile upon our first meeting.

Grace nods approvingly, taking a drag on her cigarette.

GRACE
(subtitled)
Not bad. You sound a little formal.

NORM
(subtitled)
There is still much to learn.

Jake waits while they ignore him, chattering in fluent Na’vi.

MAX
Uh, Grace, this is Jake S----

GRACE
(turning to Jake)
Yeah, yeah, I know who you are, and I don’t need you. I need your brother.
(to Max)
You know -- the PhD who trained three years for this mission.

JAKE
He’s dead. I know it’s a big inconvenience to everyone.

GRACE
How much lab training have you had? Ever run a gas chromatograph?

JAKE
No.

GRACE
Any actual lab work at all?

JAKE
High school chemistry. But I ditched.

Grace wheels on Max.

GRACE
You see? You see? They’re pissing on us without even the courtesy of calling it rain.
(turning away)
I’m going to Selfridge.




She shoves past Jake.

MAX
Grace, that’s not a good idea.

But she’s already out the door and clomping down the corridor. Max turns to Jake with a pained look.

MAX
Here, tomorrow, oh eight hundred. Try to use big words.


INT. OPS CENTER - DUSK











CUT TO:


It looks like an air-traffic control tower, with lots of screens and bay windows showing the whole complex.

ADMINISTRATOR PARKER SELFRIDGE takes a ball from a newly opened case of TITLEISTS and sets it on the floor. Selfridge is young, charismatic, focused. Some would say ruthless.

He assumes the stance and lines up his putt, toward a practice cup across the control room floor. He glances up as Grace strides toward him.

GRACE
Parker, I used to think it was benign neglect, but now I see you’re intentionally screwing us.

SELFRIDGE
Grace. You know I enjoy our little talks.

GRACE
I need a research assistant, not some jarhead dropout.

Selfridge looks down and hits the ball.

Grace kicks the practice cup aside, and the ball rolls past. Selfridge looks at her with a sigh.

SELFRIDGE
Actually, we got lucky with him.

GRACE
Lucky? How is this in any way lucky?

As Selfridge saunters over to retrieve the ball --



SELFRIDGE
Well -- lucky your guy had a twin brother, and lucky the brother wasn’t an oral hygienist or something. A Marine we can use. I’m assigning him to your team as security escort.

GRACE
The last thing I need is another trigger happy asshole out there!

SELFRIDGE
Look, you’re supposed to be winning the hearts and minds of the natives. Isn’t that the whole point of your little puppet show? If you look like them, if you talk like them, they’ll trust you?

Selfridge crosses to his office, behind a glass wall nearby. Grace follows.

SELFRIDGE
But after -- how many years? -- relations with the indigenous are only getting worse.

GRACE
That tends to happen when you use machine guns on them.

On Selfridge’s desk is a magnetic base, and hovering in mid- air, in the invisible field, is a lump of METALLIC ROCK. Pure UNOBTANIUM. He grabs it and holds it up between thumb and forefinger, in front of Grace’s eyes.

SELFRIDGE
This is why we’re here. Unobtanium. Because this little gray rock sells for twenty million a kilo. No other reason. This is what pays for the party. And it’s what pays for your science.
Comprendo?

He places it back in the magnetic field.

SELFRIDGE
Those savages are threatening our whole operation. We’re on the brink of war and you’re supposed to be finding a diplomatic solution. So use what you’ve got and get me some results.
CUT TO:



INT. LINK ROOM - DAY

NEXT MORNING, GRACE, NORM and JAKE approach their link units.

Jake glances through a PRESSURE WINDOW. In an adjoining chamber (the AMBIENT ROOM) JAKE’S AVATAR lies on a gurney, breathing slowly in PANDORAN AIR. NORM’S AVATAR is on a second gurney. Both are attended by med techs in exo-masks.

Norm slips into his LINK CHAIR, expertly donning biometric sensors.

GRACE
How much link time have you logged?

NORM
Five hundred and twenty hours.

Grace looks pointedly at Jake.

JAKE
Like -- an hour.

GRACE
Tell me you’re joking.

Grace opens the hood of Jake’s link unit. Jake starts hauling himself across from his wheelchair. She reaches to help him but --

JAKE
Don’t! I got this.

Grace steps back, hands raised. He drags himself into the unit.

GRACE
So you just figured you’d come out here to the most hostile environment known to man, with no training of any kind, and see how it went? What was going through your head?

He meets her eyes with a defiant glare.

JAKE
Maybe I was just tired of doctors telling me what I couldn’t do.

Grace watches him laboriously pull his inert legs into the link chair by hand.



Jake settles into the warm fluid gel packs lining the unit. It seems to enfold him. Grace adjusts his biometric sensors, then lowers the UPPER CLAMSHELL --

GRACE
Relax and let your mind go blank. That shouldn’t be hard for you.

JAKE
Kiss the darkest part of my lily white -- But the SLAMMING HOOD muffles the rest.
MAX
Initiate link.

The LINK TECH touches some controls.

ON A LARGE MONITOR a 3D SCAN of Jake’s brain appears. Regions of activity flow with complex shifting colors.

MAX
That’s a gorgeous brain. Nice activity.

GRACE
Go figure.
(walking away) Alright, I’m going in.

TECH
Phase-lock at forty percent. He’s in transition.

Max watches a display showing the avatar’s nervous system aligning with Jake’s -- two ghostly networks of light merging.

MAX
That’s it. Find your way home.

ECU JAKE, inside the link unit. His eyes move under the lids, like a dreamer in REM sleep as --

INSIDE JAKE’S MIND -- radiant streamers coalesce into a pulsing TUNNEL OF LIGHT and --

THE SCREEN FLARES WHITE -- ZZZWHAP! -- resolving into an overexposed, out-of-focus image -- two BLURRY FACES wearing masks, looking down.

ECU JAKE’S AVATAR -- two very intense eyes FILL FRAME, the pupils contracting. Golden irises pulse with life.





He’s in.
MAX


TECH

Phase-lock ninety nine percent. The link is stable.

Blinking, Jake slowly sits up on the gurney. He looks down at his AVATAR BODY, touching his chest with one hand.

MAX
Take it slow, Jake. We need to check your motor control. Try touching your fingertips together --

But Jake isn’t listening. He’s staring at his legs. He eases them off the gurney and --

HIS BLUE FEET touch the concrete floor, taking his weight.

JAKE STANDS, feeling the strength in his legs. His expression is child-like with wonder.

HIS POV -- looking down at the med techs, who seem the size of children next to his 9’ tall frame.

He sees something like a blue tentacle curl across his arm and he JERKS AROUND in alarm. HIS TAIL.

As he turns to see it, the tail sweeps instruments off a table with a crash. Jake laughs and grins at Max.

MED TECH
Easy, Jake, I need you to sit down --

But Jake takes a step, then another. The wires to the bio- monitors pull taut, and he yanks them off his chest.

MAX
Jake! Wait, we have to run some tests --

But Jake pushes past the protesting med techs, toward the door and --

EXT. AVATAR COMPOUND - DAY

Jake emerges, blinking in the morning sun. He finds himself in the AVATAR COMPOUND -- a living and training area.

Nearby, a couple of AVATARS are playing one-on-one in front of a (non-regulation height) basketball net. Others go about their daily activities around the compound.



Jake flexes his legs -- JUMPS -- and lands a little unsteadily, but his expression is joyful.

He takes a few steps and breaks into a RUN. People are calling to him, somehwere, but he doesn’t hear them -- he’s running. RUNNING!

He finds himself in the COMPOUND GARDEN, and stops amid neatly tended rows of ALIEN PLANTS. He looks down, wiggling his toes in the warm soil. Then inhales deeply -- revelling in the alien smells -- earth, plants, the nearby forest. He looks at his bare footprint in the soil of an alien world.

GRACE (O.S.)
Hey Marine!

Jake turns at the familiar voice to see --

A statuesque FEMALE AVATAR walking toward him. AVATAR GRACE is magnificent, with panther thighs, flat muscular stomach and firm athlete’s breasts. She wears shorts and a T-shirt. In human years she would be about 35.

JAKE
Grace?

GRACE
Well who’d you expect, numbnuts? Think fast!

She throws him a piece of Pandoran fruit, which he catches.

GRACE
Motor control is looking good.

Jake bites into the fruit, the juice running down his chin.

NORM (O.S.)
Hey, check it out.

Jake turns to see NORM’S AVATAR posing like a bodybuilder -- chest shot, back shot, bi’s.

NORM
I am a living god.
CUT TO:

EXT. MINE PIT - DAY

A WIDE SHOT of the terraced crater of the UNOBTANIUM MINE. A quiet beat, then --



K-WHOOOOM! The entire face of one terrace is blown skyward in a chain of EXPLOSIONS. The “shot” blasts hundreds of tons of rock loose.

LONG LENS ANGLES of enormous WHEEL-LOADERS shovelling up ore- rich rock and dropping it into DUMP TRUCKS.

EXT. RAINFOREST - DAY

A wall of steel FILLS FRAME. The DOZER BLADE crushes everything in its path, reducing trees to kindling.

WIDER, showing the CLEAR-CUTTING operation near the mine, as a road is cut through the jungle. Remotely operated DOZERS three stories tall rip into the tree-line.

One of the dozers has rotating SLASH-CUTTER, a vicious spinning head, mounted on a hydraulic arm, that hogs through the enormous tree trunks in a spray of wood-shrapnel.

The heavy machines are escorted by AMPSUITS. COLONEL QUARITCH, on foot, leads a squad of troopers wearing breathing masks and carrying almighty big AUTOMATIC WEAPONS.

A BANSHEE -- a fearsome aerial predator -- HURTLES from above, diving toward them on wings 3 meters across. We get a glimpse of glassy fangs before --

P-P-POOM! Quaritch cranks off three rapid SHOTS with his massive sidearm, and the creature drops with a SHRIEK.

It crashes near them and Quaritch FIRES two more well placed rounds. The newbies stare at the thing’s barracuda teeth.

QUARITCH
For you pogues, this is a banshee. A small one. See, they like it when I bring fresh meat out here. And this clearcutting really stirs up the hornet’s nest. So keep your head on a swivel. If it moves, shoot it. If you’re not sure it’s moving -- shoot it! If it looks like a bunch of flowers you want to take home to Sally Rottencrotch -- SHOOT IT!
What’re you gonna do?

TROOPERS
Shoot it, sir!

QUARITCH
Outstanding. Let’s roll.



Quaritch leads his squad into the gloom of the forest, his eyes scanning. Flanking the squad, LYLE WAINFLEET drives an AMPSUIT, his massive feet CRASHING through the underbrush.

As his gaze comes down, he sees something ahead of him on the trail -- an intricate TOTEM of woven sticks, bones and feathers hanging across the trail like an orb-weaver’s web.

He tears it down with the barrel of his rifle, and stomps it into the mud as he moves on.

INT. AVATAR LONGHOUSE - DUSK

Jake sits on a wooden bed in a long hut of tropical-style construction -- beamed ceiling, open sides covered by screen.

Around him the other avatars are bedding down for the night, pulling insect netting around their cots. In one hand, Jake holds the end of his long braided QUEUE of hair.

CLOSE ON the queue -- the ends of the hair writhe slowly with their own life, like tendrils of a sea creature.

JAKE
That’s kinda freaky.

GRACE switches off the overheads.

GRACE
Lights out amigos. See ya’ at dinner.

Jake sits in the twilight, listening to the SCREECHES and HOOTS from the forest. Finally he lies down, CLOSING HIS EYES and --

INT. LINK ROOM - NIGHT

ECU HUMAN JAKE -- his eyes OPEN.

Jake blinks, disoriented, as Max opens the upper clamshell of his link unit.

In the next chair Grace sits up, yawning and cracking her neck as the scared tech runs to her with a lit cigarette.

GRACE
(looking down)
Damn. Same old sack a’ bones.

JAKE struggles with the dead weight of his legs as he hauls himself out of the unit.
CUT TO



INT. COMMISSARY - EARLY MORNING

JAKE sits with GRACE, NORM and the other avatar “drivers”, while around them miners, troopers and other base personnel wolf their breakfasts. Grace is engaged in a heated conversation with another SCIENTIST.

Jake, isolated from the conversations around him, notices --

PILOT TRUDY CHACON approaching, dressed in her flight suit. She’s a rock-hard former Marine with thousands of flight hours out in the badlands.

TRUDY
Sully -- Colonel wants to see you in the Armor Bay.

Jake gives Norm a puzzled glance and pivots from the table. He wheels away, led by Trudy.

TIGHT ON GRACE, scowling as she watches him go.
CUT TO:

INT. ARMOR BAY - MORNING

JAKE AND TRUDY enter the ARMOR BAY, passing TILT-ROTORS under repair. There are the heavily armed SCORPIONS as well as several SA-2 SAMSON work-horses outfitted with door guns and rocket pods.

JAKE
You guys’re packing some heavy ordinance.
TRUDY
Yeah, ‘cause we’re not the only thing flyin’ around out there. Or the biggest. I’m gonna need you on a door gun, I’m a man short.

JAKE
Yeah, no problem.
She extends her fist and he taps it with his.
TRUDY
See ya on the flight-line, zero nine. (she points)
He’s down there.

Jake rolls his chair along the central gallery of the Armor Bay, passing rows of AMPSUITS standing in service racks.
Techs clamber over the ‘suits, loading ordinance with cranes and lifts.



At the end of the row is a makeshift GYM area. QUARITCH is bench-pressing massive plates.

QUARITCH
This low gravity makes you soft. (pushing the last rep)
You get soft, Pandora will shit you out dead with zero warning.

Quaritch racks the bar and sits up, sweating but not winded.

QUARITCH
I pulled your record, Corporal. Venezuela
-- that was some mean bush. Nothing like this here, though. You got heart kid, coming out here.

JAKE
I figured -- just another hellhole.

Quaritch chuckles appreciatively, claps him on the shoulder. The CHIEF MECHANIC yells from the nearest AMPSUIT --

MECHANIC
That servo’s in, Colonel, if you want to try it.

Quaritch crosses to the ‘suit, with Jake following.

QUARITCH
I was in First Recon a few years ahead of you. More than a few. Two tours in Nigeria, not a scratch. I come out here and --

He points to his scarred face.

QUARITCH
They could fix this if I rotated back. But you know what? I kinda like it.
Reminds me every day what’s out there. Besides, I can’t leave --

He looks out, as if he can see through the wall to the tree- line.

QUARITCH
This is my war, here.

Quaritch climbs the ‘suit and reaches into the cockpit, throwing some switches. The ‘suit’s gas-turbine spools up with a rising WHINE.



QUARITCH
The avatar program is a joke -- buncha limpdick scientists. But we have a unique opportunity here, you and I. A recon Marine in an avatar body could get me the intel I need, on the ground, right in the hostiles’ camp.

The WHINE is now a roaring WHOOSH as the ‘suit trembles with power. The air boils above the exhaust vents.

Quaritch reaches in and operates the controls, flexing one huge hand. He nods to the waiting mechanic --

QUARITCH
Looks good.
(to Jake)
I need you to learn about these savages, gain their trust. Find out how I can force their cooperation, or hit ‘em hard if they don’t. Maybe you can keep some of my boys from going home like you. Or bagged-and-tagged.

JAKE
(nodding)
That sounds real good, Colonel. So -- am I still with Augustine?

QUARITCH
On paper. You walk like one of her science pukes, you quack like one, but you report to me. Can you do that for me?

Jake nods. Quaritch brings the ‘suit to life. He steps forward and pivots smoothly.

He balances the two ton machine on one foot while sweeping the arms in strong, graceful arcs. Jake realizes he is doing a WU-SHOO KATA. A flawless display of strength and control. He’s impressive, and Jake is impressed. Quaritch is the kind of man he respects -- focused, hard. Determined.

QUARITCH
Look, son -- I take care of my own. Get me what I need, I’ll see you get your legs back when you rotate home. Your real legs.

He raises the ‘suit’s hand, and slams the canopy shut like the visor of a helmet. Jake watches Quaritch walk past, huge feet CLANGING -- KUNG! KUNG! KUNG!



INT. BIO LAB - DAY

GRACE is on the move, gulping coffee, in a hurry to get their FIRST SORTIE started. She hands a clipboard to MAX.

GRACE
Start calibrating. We’re on the flight line in ten minutes.

Max nods and jogs ahead toward the LINK ROOM. JAKE and NORM fall in with Grace as they enter the CONNECTING CORRIDOR.

GRACE
What did Atilla want?
JAKE
Just Marines comparin’ tattoos.
GRACE
(not buying it)
Yeah. Well, listen to me, Marine --
She stops, turning to drill him with a look.
GRACE
-- you’re driving an avatar, now. That means you’re in my world, got it?

JAKE
Got it.
She turns and enters the LINK ROOM. INT. LINK ROOM
Grace crosses to the controls of Jake’s LINK UNIT. As the others catch up --

GRACE
That son of a bitch has screwed up this program enough. All this --
(indicating link room)
-- exists so we can go out there and build a bridge of trust to these people, who could teach us so much. But thanks to Quaritch and his thugs the Na’vi won’t even talk to us anymore.

JAKE
Then how’s this supposed to work?



GRACE
We have a new face.
(turning to Norm)
You’re fluent, you’ve studied the culture. You’re non-threatening. The ones we know best -- the Omaticaya clan -- may give you a chance. Maybe you can get them back to the table before things go tits-up for good.

NORM
This is failing as a pep talk.
Jake hauls himself across from wheelchair to link.
JAKE
How do we contact them?
GRACE
We don’t. They contact us. If they see us taking our samples, treating the forest with respect --
(pointedly to Jake)
Not trampling everything in sight -- they may reach out to us.

JAKE
Or they may skin us and make a drum.
Jake lies back, lowering the sensor array over his body.
GRACE
Just keep your mouth shut and let Norm do the talking.

She closes his clamshell, HARD, and we --
CUT TO:

EXT. RAIN FOREST / AERIAL - DAY

FLYING over a carpet of rainforest, past sheer cliffs and cloud-wreathed mesas. TRUDY’S SAMSON TILT-ROTOR chases its shadow across the treetops. Though big as a Blackhawk, it is tiny in the vast primeval landscape.

ANGLE THROUGH the open side doors of the Samson. Trooper WAINFLEET, in exo-mask and body armor, leans on his door gun, scanning for aerial predators.

In avatar form JAKE, GRACE and NORM watch the forest unrolling beneath them, the wind blasting their clothes. Jake mans the other door gun, his feet propped on the skids.



TRUDY flies from a pressurized cockpit. She banks to follow a shallow river.

TRUDY (INTERCOM)
Sturmbeest herd, one o’clock.

Norm grins and points, excitedly. Jake looks in time to see-- A herd of STURMBEEST -- massive six-legged creatures reminiscent of buffalo -- thundering across the river.

GRACE
Looks like a bull, six cows and some juveniles.

NORM
The bull has the red on the dorsal armor?

Grace nods approvingly.

TIME CUT -- Hundreds of purple winged creatures take flight from a lake, startled by the Samson. They skim the water above their own reflections. TETRAPTERONS.

TIME CUT -- the ground drops away as the Samson flies over a WATERFALL hundreds of feet high. Trudy banks hard, rolling in on the gorge below like it’s a gun-run.

Wainfleet WHOOPS while Norm looks like he’s about to puke.

WAINFLEET
Yo Chacon! Get some!

Jake grins into the airstream.
CUT TO:

EXT. CLEARING - DAY

A small meadow among towering trees. The fern-like “grass” is beaten down in waves by the rotor-wash as the Samson settles to the ground.

Jake pulls the massive door gun off its pintle mount and hefts it like an assault rifle.

He and Wainfleet leap out to secure the LZ, scanning the tree- line warily, weapons aimed.

Grace jogs forward to the cockpit, motioning Trudy to shut down. Trudy kills the Samson’s TURBINES.

Grace, towering over Wainfleet, motions him to hang back.



GRACE
Stay with the ship. (for Jake)
One idiot with a gun’s enough.

WAINFLEET
Whatever you say, Doc.

Jake takes point as they enter the jungle.

WAINFLEET
(laughing)
Ya’ll have fun out there.

EXT. RAINFOREST - DAY

The forest engulfs JAKE, GRACE and NORM in cyan gloom. The shadows are alive with the CHITTERING sounds of unseen alien wildlife.

TRACKING WITH JAKE as he moves through the foliage, hyper- alert -- looking around like a tourist in Hell.A monkey-like PROLEMURIS leaping from limb to limb overhead, flashing through the sunlight streaming down in shafts.

A PLANT with swaying tendrils which reach toward Jake as he passes.

This forest is more alive than any on Earth, with plants that react and move like animals. Jake white-knuckles his rifle as if every shadow conceals razor-fanged death.

GRACE
Relax, Marine. You’re making me nervous.

She pushes ahead of him on the trail, forcing him to lower his muzzle as he follows her. Grace moves nimbly on the path, seemingly unconcerned.
CUT TO:

EXT. FOREST/ GLEN

WIDE SHOT as the party moves between the huge trees, tiny as ants. The trail has gotten steeper, the going tougher.
CUT TO:

EXT. SCHOOL RUINS - DAY

They enter a clearing with an OVERGROWN BUILDING made of timbers cut from the local trees, with a thatch roof. It is covered with vines as the jungle reclaims it.




NORM
How will they know we’re here?

GRACE
I’m sure they’re watching us right now.

Norm gulps. Jake looks behind him as they approach the school, feeling unseen eyes.


INT. SCHOOL RUINS








CUT TO:


TRACKING WITH JAKE’S BOOTS as he steps among dried leaves and a few moldering CHILDREN’S BOOKS. Floorboards CREAK.

GRACE (O.S.)
The kids were so bright, so eager to learn... they picked up English faster than I could teach it to them.

WIDER as Jake explores the room. Grace and Norm are selecting INSTRUMENTS from storage cases on a wooden table.

GRACE
Bring the soil probe -- right there, yellow case.

Jake looks up at a RUSTLING among the dark rafters. Roosting STINGBATS eye him warily, fluttering their wings.

Grace picks up a moldering copy of “The Lorax” by Dr. Seuss from the floor and puts it back on a shelf.

GRACE
(wistfully)
The stingbats knock them off. I guess I always hope somebody will come back and read them.

NORM
Why don’t they come back?

GRACE
(grimly)
The Na’vi learned as much about us as they needed to know.

Jake sees something, and approaches the blackboard -- reaches out to touch a pattern of holes blasted into the slate.
Unmistakably BULLET HOLES.



JAKE
(turning to her)
What happened here?

GRACE
(sharply)
Are you going to help with this gear? We’ve got a lot to do.

She turns away. Jake watches her as he jams equipment into his pack.
CUT TO:

EXT. RAINFOREST - DAY

CLOSE ON Grace’s blue hand gently brushing away soil, exposing a tangle of ROOT TENDRILS.

GRACE
See, right here where the roots of the two trees interact.

WIDER -- GRACE and NORM crouch among enormous octopoidal roots. She takes a tiny sample using a needle-like probe. Norm uses a digital DEVICE to scan the roots.

JAKE, bored, scouts ahead a few meters.

He comes to a GLADE filled with shoulder-high SPIRAL PLANTS called HELICORADIANS.

He BRUSHES one and SHTOONK! -- it SUCKS DOWN into a tube in the ground so quickly it seems to simply vanish.

Curious, Jake touches another -- SHTOONK! And another -- like popping balloons after a party. SHTOONK! SHTOONK!
SHTOONK!

A chain reaction begins and the whole colony pulls down into the ground, REVEALING --

A HAMMERHEAD TITANOTHERE. Like a six-legged rhinoceros, but twice that size. Its massive, low-slung head has projections of bone giving it the look of a hammerhead shark.

Its baleful eyes lock onto him. Jake raises his rifle.

Grace, alerted by the creature’s SNORTS, runs to where she can see the tableau. She presses her THROAT MIKE.

GRACE
Don’t shoot. You’ll piss it off.



The bull HAMMERHEAD bellows and lowers its 3 meter wide sledgehammer of a skull.

JAKE
It’s already pissed off!

GRACE
Jake, that armor’s too thick. Trust me.

Jake starts to back away. The hammerhead bellows again, pawing the earth.

GRACE
It’s a territorial threat display. Do not run, or he’ll charge.

JAKE
What do I do?

GRACE
Hold your ground!

The hammerhead SLASHES its head sideways, splintering saplings. It bellows again, lowers its head and CHARGES --

Jake SCREAMS at the top of his lungs, spreads his arms wide and runs straight at the thing.

It STOPS abruptly, with an oversized BLEAT. ON JAKE -- amazed the gambit worked.
JAKE
Oh yeah! Who’s bad?! That’s right. SOMETHING rises up behind him out of focus --
A THANATOR. The most awesome land predator the universe has ever conceived This thing could eat a T-rex and have the Alien for desert.

It is a black six-limbed panther from Hell, with an armored head and massive distensible jaws.

JAKE, unaware of the advancing thanator, is still bracing the hammerhead --

JAKE
That’s what I’m talkin’ about, bitch!

The bull wheels around, TRUMPETING in fear, and CRASHES away through splintering undergrowth.



JAKE
That’s right motherf--

A guttural SNARL behind him. Jake spins in time to see --

THREE TONS of rippling thanator LAUNCH over him, landing between him and the hammerhead. The ground shakes.

The thanator emits an earsplitting ROAR, enraged that the hammerhead got away. It twists on itself, turning to face Jake, and bares its fangs with a lethal HISS.

JAKE
What about this one? Run, don’t run? What?

GRACE
Run. Definitely RUN!

Jake BOLTS as --

The thanator LEAPS after him and --

Jake launches himself between two large trunks, forcing the beast to claw its way around to the side while --

Jake scrambles up -- around -- over a tangle of roots and --

SK-RASH!! CLAWS SLASH the air behind him, EXPLODING bark off a trunk as --

JAKE wills himself forward in a frenzy. With rippling muscle the beast is airborne again, blacking out the sun but --

JAKE dives under a massive root system, and --

CRASH! Kindling rains around him as the beast tears into the root-trunks above him. Claws SLASH down next to him as he rolls and crawls --

Glistening jaws SMASH and SNAP against the barrier trunks, sending chunks of wood flying. It’s spittle sprays across Jake, jaws inches away as --

He rolls onto his back, and FIRES his AR point blank but the rifle is SNATCHED out of his hands. The beast SCREECHES an ungodly WAIL of pain and rage and -- RIPS the ENTIRE TRUNK away. Jake scrambles to escape but --

GLISTENING JAWS lunge downward, SNAP SHUT and --

The creature rips Jake out of the tree, shaking him like a junkyard dog with a rabbit, only --



It has him by the BACKPACK, so Jake unlatches it and --

He FLIES FREE as the thanator crushes the pack with its teeth. Giving Jake a moment to sprint away, but --

With a hideous BELLOW the thanator crashes after him, splintering trees.

JAKE RUNS in a blur, dodging between trunks as a glistening black tornado shreds the forest behind him and --

He sees WATER ahead and DIVES OUTWARD with all his might --

The thanator’s jaws SNAP SHUT inches behind him as he flies out into open space and --

JAKE SPLASHES down into a swiftly moving river.

The thanator LEAPS DOWN AFTER HIM, pursuing from rock to rock, its claws swiping like a grizzly fishing for salmon.

Jake ducks under as -- FWHOOSH! -- black claws SLASH past his face amid turbulent bubbles.

A WATERFALL ahead. Jake is swept over the falls, with the thanator SWIPING at him from a rock, just MISSING and --

Jake disappears down the throat of the thundering cataract. EXT. RIVER BELOW FALLS - DAY
The water boils below the cataract. Jake’s head bursts through the surface, and he gasps for breath.

He is carried along by the current, but manages to grab a limb on a fallen tree. He weakly pulls himself up, and just lies there gasping on the trunk.

Above him, on the cliff, the THANATOR BELLOWS, a roar which echoes across the jungle.
CUT TO:

EXT. RAINFOREST - DAY

JAKE, wet and bruised, crouches under a screen of giant
leaves.	He hacks manically at the end of a cut sapling with his knife, forming a crude but sharp tip.

EXT. RAINFOREST - DAY

TRACKING with Jake as he walks through the forest like it’s a minefield, carrying his SPEAR white-knuckled. He is freaked and hyper-alert.



The trees here are a hundred meters high, blocking out the sky. A few pencil beams of sunlight filter down into the cyan gloom.

POV FROM ABOVE -- looking down through leaves we watch Jake move warily through the forest.

ECU -- TWO GOLDEN EYES, bright in the shadows.

DOWNANGLE as Jake passes under a tree limb. Invisible to him, draped on the limb like a leopard, is a striking NA’VI GIRL. She watches, only her eyes moving.

She is lithe as a cat, with a long neck, muscular shoulders, and nubile breasts. And she is devastatingly beautiful -- for a girl with a tail. In human age she would be 18. Her name is NEYTIRI(nay-Tee-ree).

Jake passes less than 2 meters beneath her, oblivious.

NEYTIRI rises soundlessly. In one fluid, sinuous movement she NOCKS an arrow to her BOW and DRAWS, aiming RIGHT AT JAKE. Utterly silent.

Below her Jake is totally unaware of the arrow aimed at his THROAT.

ON NEYTIRI as she follows him with the bow, muscles tensing for the shot --

-- and SOMETHING drifts down in front of her, F.G. She hesitates.

RACK FOCUS to the tip of the arrow -- where a single WOODSPRITE floats down to land on the arrow-head.Like a dandelion seed, but larger, the WOODSPRITE waves its silky CILIA, feather light, as it balances on the deadly point. It glows faintly in the dark shadows.

NEYTIRI frowns, puzzled, and LOWERS her bow slowly. The woodsprite WHIRLS away into the gloom.
CUT TO:

INT./EXT. SAMSON - SUNSET

GRACE and NORM peer down into the shadowed forest as TRUDY banks in a search pattern.

TRUDY (INTERCOM)
I’m going to have to call it, guys. We’re not allowed to run night ops. Colonel’s orders.



Grace looks to the west. The sun setting behind alien trees.

GRACE
Shit.

TRUDY
Sorry, Doc. He’s just gonna have to hang on ‘till morning.

GRACE
He’s not going to make it till morning.

Grace stares into the dark forest as the Samson banks hard, thundering away toward the setting sun.
CUT TO:

EXT. RAINFOREST - NIGHT

LONG LENS-- POLYPHEMUS. The giant planet rises behind the black trees.

Jake’s got a new problem. He sees shapes moving with liquid grace in the NIGHT shadows behind him. He is being stalked by a pack of VIPERWOLVES.

Jake catches only glimpses -- a glint of eyes, a slinking black movement -- then nothing. Darkness.

TIME CUT -- TIGHT ON Jake’s hands as he knots his T-shirt around the butt end of the spear.

ANGLE ON THICK SAP trickling down a tree-trunk. Jake jams the makeshift torch into the sap, soaking the shirt with it.

A WATERPROOF MATCH from his survival kit lights the torch.

The torch creates a pool of light surrounded by pulsing, leaping shadows. Jake turns warily as he moves along the trail.

Behind him are several pairs of reflective green EYES. Another pair flanking him beside the trail. Black-on-black SHAPES which seem to flow like liquid.

He looks up -- sees one cross a limb overhead. Another on his opposite flank.

Then a hideous sound, like a hyena's psychotic LAUGH.

The VIPERWOLVES can run like a dog and climb like a monkey. They are hunting Jake from the ground and the trees.



JAKE RUNS by torch-light, on the edge of panic. He reaches a steep banked stream and -- without thinking -- runs across it on a horizontal trunk --

-- and STOPS DEAD on the other side. The torch illuminates GREEN EYES cutting ahead of him across the trail. The viperwolves have him encircled.

The psychotic BARKS become more intense as they signal each other, getting excited. ONE MAKES A RUN at him, angling on his legs from behind but --

JAKE WHIRLS, jamming the torch in its face. It yips and goes past, but ANOTHER moves in --

He jabs it with the business end of the spear and it SNARLS, retreating, baring its fangs.

Now half a dozen are circling him in the open, and he sees what he’s up against.	The VIPERWOLVES are six-limbed with shiny chitinous skin, their paws leathery BLACK HANDS. Intelligent eyes. Glistening black teeth in dead white gums.

Jake realizes that he is making his final stand. He whirls the torch in an arc, keeping them at bay --

And feels a rush of adrenaline. It goes through him like a lightning bolt and the fear is gone.

JAKE
(screaming)
I don’t have all goddamn night! Come on! Come on!

With snarls and a blur of motion THEY ATTACK.

Jake CRACKS the spear down on one, then SPINS as --

ANOTHER LEAPS at him and he plants the spear in it, striking true, but --

Its momentum wrenches it from his hands, and the torch goes flying. Left in semi-darkness, Jake draws his KNIFE as--

A WOLF LUNGES, sinking its teeth into his arm. He YELLS in pain and fury, SLASHING with the knife which --

CUTS deep into the beast’s shoulder and it lets go.

JAKE SPRINTS, trying to escape, but a snarling viperwolf leaps, GRABBING him by the ankle with its fore-hand. Jake tears away, sprawling, SCRAMBLING to get up as --



THREE WOLVES charge at once. The nearest LEAPS at his throat just as --

THUNK!! -- an ARROW appears in its chest.

The wolf lands on him, already a dead weight. He pushes it off in time to see --

A BLUE AMAZON emerge from the trees, nock another arrow, draw and FIRE in one fluid motion. AN UNEARTHLY YOWL as another wolf falls.

NEYTIRI LEAPS right over Jake, and CRACKS her bow down on the skull of a circling wolf.

ANOTHER SPRINGS at her and she drops under its weight, but rolls, coming up on top of it with a knife in her hand.

Her knife FLASHES down, buried to the hilt in its chest.

SNARLING, a wounded wolf attacks Jake, and he KICKS it away, but --

It SPINS and leaps back onto him, and Jake barely catches its throat in time to keep the SNAPPING JAWS away from his face.

MEANWHILE Neytiri swings her bow in a big arc, CRACKING IT across the heads and shoulders of two remaining wolves.

NEYTIRI
Rrreeyaaah! Hyaaaah!!

The wolves slink and circle, yelping as the bow whistles past them. Finally they break and run, with Neytiri chasing and--

They bound away through the foliage as she SHOUTS after them--

NEYTIRI
Raaaarrrr!

Jake has his adversary pinned and is choking it with all his weight. Finally it stops thrashing. Panting, he releases it and looks up at --

NEYTIRI. Her tail LASHES as she scans the forest, listening to the fading YELPS of the wolves. Satisfied the attack is over, she turns.

She regards him coldly for a second, then walks past him. Neytiri picks up the torch and extinguishes it in a stream.

JAKE
Wait, don’t --



Jake blinks around at the darkness -- realizing he can still see. In fact, with the blinding torchlight gone, the forest is transformed.

The jungle has come alive with BIOLUMINESCENCE -- spots and patterns, ghosts and galaxies of blue-green light.

Jake scrambles to recover his spear. Neytiri kneels beside --

A DYING WOLF. It’s CRIES are pitiful. It paws the air, trying to raise its head. She pulls her KNIFE from its chest.

NEYTIRI
(in Na’vi)
Forgive me, my brother.

She cuts its throat, ending the pitiful cries. She touches its head gently, regarding it with sadness.

Neytiri wipes the knife and returns it to the sheath at her waist. She crosses to another slain wolf and kneels, pulling the arrow from its heart.

JAKE
Look, um, I know you probably don’t understand this. But -- thanks. Thank you. I owe you.

Neytiri ignores him, assuming a prayer posture over the dead animal.

NEYTIRI
(in Na’vi)
Forgive me. May your spirit run with the Great Mother.

JAKE
I would have been screwed if you hadn’t come along --

She rises and walks away without looking at Jake.

JAKE
Hey, wait. Wait! Where you goin’?

He crashes through some plants, catching up to her.

JAKE
Slow down a second will you. I just want to thank you for killing those --

He makes the mistake of grasping her shoulder and --



WHACK! She WALLOPS him upside the head with her bow in a fierce backhand swing, laying him out flat.

He looks up to see a FURY standing over him. A Fury who speaks English -- accented, halting, angry English.

NEYTIRI
Don’t thank! You don’t thank for this! This is sad. Very sad, only.

JAKE
Okay, I’m sorry. Whatever I did -- I’m sorry.

She gestures at the bodies of the viperwolves.

NEYTIRI
All this is your fault! They did not need to die.

JAKE
They attacked me. How’m I the bad guy here--

She silences him with the tip of her bow at his throat.

NEYTIRI
Your fault! You are like a baby, making noise, don’t know what to do. You should not come here, all of you! You only come and make problems. Only.

Jake gets up, slowly, facing her.

JAKE
Okay, fine, you love your little forest friends. So why not just let them kill my ass? What’s the thinking?

CU Neytiri -- looking away. Finally, reluctantly, her eyes MEET HIS for the first time -- a riveting gaze with those big gold orbs.

NEYTIRI
Why save you?

JAKE
Yes, why save me?

NEYTIRI
You have a strong heart. No fear.

She leans closer --



NEYTIRI
But stupid! Ignorant like a child!

She turns away, stalking off, but Jake goes after her. TRACKING WITH Neytiri as she climbs nimbly along a huge ROOT.
WIDER as she trots with perfect balance along the root, which forms an elevated walkway.

Jake runs to catch up, realizing suddenly that he is far above the forest floor. Throughout the following they move through a GLOWING PHANTASMAGORICAL FOREST.

JAKE
If I’m so ignorant, maybe you should teach me.

NEYTIRI
Sky people can not learn. You do not
See.

She leaps to another elevated root. Jake follows, surprised that he made it.

JAKE
Whooaa.

He runs to catch up with her easy jogging pace.

JAKE
Then teach me to “see.”

She stops and he almost runs into her.

NEYTIRI
No one can teach you to See.

Then she turns and trots on. EXT. GORGE - NIGHT
They run across the elevated root of an enormous tree -- a horizontal trunk big as an oak.

WIDE SHOT as they cross a DEEP GORGE. A waterfall shimmers silver in the Polyphemus-light. Vines hang down a hundred feet into the gorge, and among them swoop stingbats and other night flyers.

JAKE
Hey, slow down. Look, I think we just got off on the wrong foot and --



Jake looks down, suddenly aware of the height.

JAKE
--you just have to get to know me. I’m Jake. Jake Sull--

A vine catches his spear and spins him off balance. He drops the spear and almost falls off the root.

JAKE
Whooaaa -- shit!

Neytiri catches him with one hand, gripping his bicep. He watches the spear cartwheel down to splash in the river.

She pulls him upright. Shouts at him in English and Na’vi.

JAKE
I need your help.

NEYTIRI
You should not be here.

JAKE
So take me with you.

NEYTIRI
No. You go back.

DOWN ANGLE FROM FAR ABOVE -- several WOODSPRITES float down through the trees. FOLLOW THEM as they descend silently toward Jake and Neytiri.

NEYTIRI, sensing a presence, looks up to see --

The WOODSPRITES, PULSING with purpose, float right towards Jake. They dance gently around his shoulders and head.

JAKE
(off her amazed look) What?

More woodsprites gather around him. Several ALIGHT on him.

Jake holds still, knowing he should be afraid -- but somehow he’s not. He spreads his arms. More sprites come, landing all over his arms, hands, body.

JAKE
What are they?

CU NEYTIRI -- reacting with a mixture of wonder and dread.



NEYTIRI
Atokirina’. Seeds of the Great Tree -- very pure spirits.

Jake -- now a pulsing, glowing, fluttering MASS OF LIGHT -- moves one hand slowly, not wanting to break the spell. He studies one of the sprites dancing on his palm until --

-- WHOOSSHH! the woodsprites whirl up and away, scattering into the darkness.

JAKE
What was that all about?

Neytiri seems shaken. She seizes his hand and pulls him after her.



Come!
NEYTIRI


CUT TO:


EXT. RAINFOREST - NIGHT

TRACKING WITH JAKE as he gazes about him in growing wonder. He touches leaves as he passes, watching the bioluminescence shiver through them.

Jake looks down as -- they cross a bed of purple MOSS which reacts to the pressure of their footsteps. Rings of green light, like ripples on a pond, expand outward from each footfall. Exploding rings of light where his feet touch down. Dream-like, surreal beauty.

WIDE ON THEM as they run over a large root, across a mirror- like POOL at the base of a WATERFALL.

Jake follows Neytiri, running along a raised root-trunk.

JAKE
What’s your name?

JAKE hears WHOOSH-WHOOSH and snaps a look as a BOLO flies at him, spinning end for end and --

SHWHAP!! -- tangles around his legs. He topples off the root and crashes into the foliage below.
JAKE untangles himself, getting up to run just as -- SEVERAL NA’VI RIDERS thunder toward him. They are riding
DIREHORSES -- six-legged, armor-skinned alien Clydesdales.


We see that the riders’ QUEUES are connected to the horses’ long moth-like antennae -- a neural-link with which they can command the horse, leaving hands free for weapons.

The riders aim bows and spears at Jake as they approach. Jake turns to bolt, but --

NA’VI HUNTERS melt out of the shadows, weapons aimed -- blocking his retreat.

Neytiri drops to the ground next to Jake and confronts the LEAD RIDER. She shouts sharply in Na’vi --

NEYTIRI
(subtitled)
Tsu’tey, what are you doing?! He is my captive!

TSU’TEY(tsu-Tay)is young and powerfully built, with sculpted features and a proud jawline, piercing eyes. Tsu'tey swings off his mount with fluid grace.

TSU’TEY
(subtitled)
These demons are forbidden here. I will kill this one as a lesson to the others!

Tsu’tey draws his bow but Neytiri leaps between him and Jake, confronting him warrior to warrior.

NEYTIRI
(subtitled)
Stop! There has been a sign. This is a matter for the Tsahik.

Tsu’tey clenches his jaw with frustration -- frustration with her as much as the situation. He turns and angrily remounts his direhorse, barking a command to the HUNTERS.

TSU’TEY
(subtitled) Bring him.

They grab Jake and haul him to his feet. Encircled by spears and bows, he is shoved forward along the trail, as Tsu’tey and the others ride ahead.
CUT TO:

EXT. HOMETREE - NIGHT

JAKE is hauled roughly toward Neytiri’s village, which is sheltered inside one of the GREAT TREES. HOMETREE is 250 meters tall, with a trunk four times the diameter of the largest Sequoia, and a base of massive mangrove-pillars.



TSU’TEY rides inside the columns at the base of Hometree, shouting an ululating WARNING.

Jake is force-marched through the pillars into -- INT. COMMONS/HOMETREE - NIGHT
An open CENTRAL AREA. The villagers gather to see the arriving hunt party. We see the people of the tribe -- mothers with babies, old women, young hunters.

They gawk at the alien, expressions ranging from curiosity to outright hostility. The huge eyes of the children follow him.

Jake is amazed at the size of HOMETREE inside. By the light of the COOK-FIRES he can see up into a vast cylindrical gallery -- a living cathedral.

Clear membranes -- sturmbeest bladders -- filled with fluttering bio-luminescent insects, act as area lighting.

The central space is dominated by the SKULL of some enormous creature, mounted with much embellishment on a TOTEM. Standing in front of this, awaiting their approach, is --

EYTUKAN (AY-too-kahn), the Clan Leader. Eytukan has deeply chiselled features and a long chest mantle of THANATOR CLAWS. His normally stern features are clouded further by anger.

EYTUKAN
(subtitled)
Why do you bring this creature here?

Neytiri addresses Eytukan in Na’vi.

NEYTIRI
(subtitled)
I was going to kill him, but there was a sign from Eywa.

He glowers at her as he responds, pointing at Jake.

EYTUKAN
(subtitled)
I have said no dreamwalker will come here, to offend our home! His alien smell fills my nose

Neytiri stands her ground, answering in a respectful but not submissive tone.



NEYTIRI
(subtitled)
Father, many atokirina came to this alien.

JAKE
What’s going on?

NEYTIRI
My father is deciding whether to kill you.

JAKE
Your father!?
(to Eytukan)
Uh, good to meet you, sir.

Jake steps forward, offering his hand, and the hunters JUMP to restrain him, shouting. But they all FREEZE as --

A commanding FEMALE VOICE echoes through the chamber.

MO’AT
(Na’vi)
Step back!

Everybody looks up.

MO’AT (MOH-aht) stands on the second level, looking down. She is a severe woman in her 50’s. Her bearing is haughty, her expression friendly as a hanging-judge. Her outfit is elaborate, denoting her rank as CLAN MATRIARCH.

MO’AT
(subtitled)
I will look at this alien.

There is an expectant hush as Mo'at descends the helical core of Hometree, a kind of natural spiral staircase.

NEYTIRI
That is Mother. She is Tsahik -- the one who interprets the will of Eywa.

JAKE
Who’s Eywa?

Neytiri kneels before her like an acolyte as Mo’at passes.

The villagers stare silently as the Matriarch circles slowly around Jake, examining his tail and the end of his queue.



MO’AT
(thick accent) What are you called?

JAKE
Jake Sully.

She produces a long THORN between her fingertips. With a flourish she strikes his chest.

Jake flinches. RED BLOOD wells up and Mo'at rubs some between her fingertips. She tastes it.

MO'AT
Why did you come to us?

JAKE
I came to learn.

MO'AT
We have tried to teach other Sky People. It is hard to fill a cup which is already full.

JAKE
My cup is empty, trust me. Just ask Doctor Augustine. I’m no scientist.

MO'AT
What are you?

JAKE
I don’t know. I was a Marine -- uh, a warrior. Of the Jarhead clan.

TSU’TEY
(subtitled)
A warrior! I could kill him easily!

EYTUKAN
(subtitled)
No! This is the first warrior dreamwalker we have seen. We need to learn more about him.

JAKE
What’s going on? What are they saying?

MO’AT
(to Neytiri, subtitled)
Daughter. You will teach him our way, to speak and walk as we do.



NEYTIRI looks shocked, then angry.

NEYTIRI
(subtitled)
Why me? That's not fair! I only--

MO’AT
(subtitled)
It is decided!

Neytiri subsides, turning to glare at Jake.

MO'AT
(to Jake)
My daughter will teach you our ways. Learn well, Jakesully. We will see if your insanity can be cured.
She turns to Neytiri, her expression stern -- MO'AT
(subtitled)
He is your responsibility.

Neytiri nods, accepting, but she’s not a happy camper. She grabs Jake’s arm and pulls him roughly away.

JAKE
So it’s all good, right? You and me --

NEYTIRI
Do not speak.
CUT TO:

INT. SECOND LEVEL/HOMETREE

LATER, Neytiri leads Jake up the spiral to the SECOND LEVEL. He now wears only a ratty LOINCLOTH. His wounds are bound with plant-fiber bandages.

THE ENTIRE CLAN is squatting at dinner in a huge circle. They stop talking and turn to gaze at Jake as he enters the circle.

JAKE
Don’t get up.

Neytiri crosses the circle to the cook pit and returns with several large leaves heaped with food. She kneels next to Jake, placing the food in front of him almost DEFIANTLY.

JAKE
You never told me your name.



NEYTIRI
Neytiri te Ckaha Mo'at’ite.

JAKE
Okay, again, a whole lot slower.

NEYTIRI
(exaggerated slowness) Neytiri. Nay-TEE-ree.

Jake knows she’s baiting him. He smiles in response.

JAKE
Nay-TEE-ree. That’s nice. Nay-TEE-ree.

ACROSS THE CIRCLE, Tsu’tey, Mo'at and Eytukan sit together, glancing up occasionally from their food to the stranger.

TSU’TEY
(subtitled)
These aliens try to look like people, but they can’t.

MO'AT
(subtitled)
He seems dim to me. And his eyes are too small.

NEYTIRI motions for Jake to take portions from the serving leaves onto his own leaf.

JAKE
Your mom likes me. I can tell.

MO’AT, watching Jake and Neytiri, leans over to Eytukan.

MO'AT
(subtitled)
Neytiri will test this “warrior.” Hey may learn nothing -- but we will learn much.

EYTUKAN
You speak truth. We must understand these Sky People if we are to drive them out.

Jake munches on a white shrimp-like thing.

JAKE
These rock. What are they?

NEYTIRI
Teylu. You call beetle larvae.



Jake blanches. She heaps some more onto his leaf -- a CHALLENGE -- and Jake meets her eyes, takes a handful, and starts munching enthusiastically.

JAKE
That’s some damn fine teylu. That’s like grandma’s teylu.

CU TSU’TEY, warily eyeing Jake --

TSU’TEY
(subtitled)
I say she will kill him.
CUT TO:

INT. THIRD LEVEL - NIGHT

The sleeping level -- families nesting in groups on woven hammocks the size of trampolines. The hunters sleep along SPOKES joining the inner trunk to the tree’s outer shell.

Jake lies awake in a hammock, people rustling in the darkness around him. Neytiri is nearby, curled up like a little girl. She stares at him for a moment, then closes her eyes.

Jake watches the glowing bugs fluttering inside a night- light, a pulse of life energy. A strange peace spreads through him. He closes his eyes and --
CUT TO:

INT. LINK ROOM - NIGHT

GRACE is over JAKE in the Link, SLAPPING him, as Max and NORM hover.

GRACE
Come on back, kid, that’s it.

JAKE
Wha --? Oh.

He looks around, blinking. Reality crashing in.

GRACE
Damn, you were dug in like a tick. (she helps him sit up)
Is the avatar safe?

JAKE
(huge grin)
Yeah, Doc -- and you are not going to believe where I am.
CUT TO:



INT. COMMISSARY - MORNING

BREAKFAST the next day. The other drivers lean forward, hanging on Grace’s re-telling of the tale.

GRACE
-- so the kid’s out there one night and he’s got the Queen Bitch herself offering him the spare room and the car keys.
Unbelievable.

JAKE
It’s not something you can teach.

Some of the other scientists clap Jake on the shoulders in congratulation.


MAX
That’s awesome, Jake. NORM chomps his bacon, fuming.
GRACE
(to Jake, getting serious) For reasons I cannot fathom, the
Omaticaya have chosen you. God help us all.


INT. OPS CENTER - MORNING










CUT TO:


JAKE has reported to SELFRIDGE and QUARITCH. Quaritch turns from gazing out at the wall of forest, displaying a feral grin.

QUARITCH
Jarhead clan?
(he laughs) And that worked?

JAKE
(grinning)
Yeah. They want to study me. See if I can learn to be one of them.

QUARITCH
That’s how you seize the initiative. I wish I had ten more like you.

SELFRIDGE
Look, Sully -- find out what these blue monkeys want.
(MORE)

SELFRIDGE (cont'd)
We try to give them medicine and education. Roads! But no -- they like mud. I wouldn’t care except --

Selfridge turns to a large 3D GRAPHIC DISPLAY, pointing. A road runs from Hell’s Gate to a proposed new mine miles away.

SELFRIDGE
Their damn village is sitting right over the richest unobtanium deposit for a hundred klicks in any direction. Which sucks -- for them -- because they need to relocate.

JAKE
(taking that in)
Does Augustine know about this?

SELFRIDGE
Yeah, she does, and she’s on the next ship back if she tries to cock-block me on it.

JAKE
So -- who talks them into moving?

QUARITCH
(turning) Guess.

JAKE
What if they won’t go?

QUARITCH
(icy)
I’m betting they will.

SELFRIDGE
Killing the indigenous looks bad, but there’s one thing shareholders hate more than bad press -- and that’s a bad quarterly statement. Find me a carrot to get them to move, or it’s going to have to be all stick.

Jake is shaken by the enormity of this new responsibility.

QUARITCH
You got three months. That’s when the dozers get there.



I’m on it.
JAKE


CUT TO:



INT. BIO LAB - MORNING

JAKE pumps his chair across the lab, flanked by GRACE and NORM. Grace holds STEREO STILL PICTURES in front of him, one at a time -- images of clan members she has shot over the years -- a kind of flash card drill.

JAKE
Tsu’tey.
(next photo)
Mo’at.
(next photo) Eytukan.

GRACE
He’s the clan leader -- (indicating Mo’at)
-- but she’s the spiritual leader. Like a shaman.

INT. LINK ROOM
The dialogue is continuous as they enter.
JAKE
Got it. So who’s this Eywa?

NORM
Who’s Eywa? Oh, only their deity. The Great Mother. The goddess made up of all living things. You’d know that if you had any training whatsoever.
He hauls himself from wheelchair to Link.
JAKE
Who’s got a date with the chief’s daughter?

GRACE
Knock it off. Jesus, it’s like kindergarten around here.

As Jake settles into the soft embrace of the link, Grace inputs commands at the control station.

GRACE
Neytiri was my best student. She and her sister Silwanin. Just amazing girls.

JAKE
I didn’t meet the sister.



GRACE
(quietly) No, she’s dead.
(turning to him)
Okay, let’s go -- village life starts early.

MAX
Link is ready.

Grace lowers the bio-sensor array over Jake’s chest.

GRACE
Don’t do anything unusually stupid.

She closes the clamshell and we -- INT. HOMETREE/ THIRD LEVEL - DAY
CU JAKE’S AVATAR, blinking awake, staring up at --

HOMETREE, like a gothic cathedral overhead. Sunlight streams down through gaps in the towering vault.
CUT TO:

INT. COMMONS - DAY

JAKE walks among the villagers, who go about their daily tasks.

-- young girls sit together, weaving and SINGING. They look up as he passes, then go back to work.

--two men clean the fish they’ve caught.

-- a young mother pounds seeds into meal, while nursing an infant.

--children chase each other and climb like monkeys. One bold LITTLE GIRL runs up to Jake, stops -- staring -- then shrieks with laughter as she runs back to her playmates.

GRINNING, Jake turns to see NEYTIRI cantering toward him on a DIREHORSE. She leads a second horse, an old sway-backed MARE. His grin drops.

EXT. RIVER NEAR HOMETREE - DAY

JAKE nervously grips the surcingle of the mare. Neytiri holds its nose-ring while Jake clumsily mounts.

Jake bends one of its ANTENNAE down to the tip of his queue. He hesitantly touches them together and --



TIGHT SHOT -- the tendrils INTERWEAVE.

Jake’s PUPILS DILATE and his mouth drops open. The horse’s eyes also go wide and it HONKS nervously. Neytiri touches her fingertips to the neural interface.

NEYTIRI
This is shahaylu -- the bond. Feel her heartbeat, her breath. Feel her strong legs.

Jake closes his eyes, nodding. One with the horse.

TSU’TEY and another young hunter come out of the forest leading TWO DIREHORSES. The magnificent animals drink from the edge of the pool. Tsu’tey watches Jake’s riding lesson with disdain.

NEYTIRI
You may tell her what to do -- (she touches her head)
-- inside. For now, say where to go.

JAKE
Forward.

The horse LAUNCHES into a GALLOP. Jake flops around, with no idea how to sit the animal, and is promptly THROWN OFF. He lands painfully in the mud.

He gets up, brushing mud off knees and ass, as Neytiri leads the horse back to him.

NEYTIRI
Again.

SERIES OF JUMP CUTS -- Jake falls off the horse in various ways, seemingly landing harder each time.

ON JAKE, face down in the mud of the riverbank. He painfully rises to hands and knees. Which is when he sees --

TSU’TEY and another HUNTER thundering across the shallow river on their direhorses. Spray blasts up from their hooves.

Jake stands, covered in mud, as Tsu’tey stops his horse next to him, looking down with disdain.

TSU’TEY
You should go away.



JAKE
(to Neytiri)
I knew this guy could speak English.

Tsu’tey turns to Neytiri, who is leading the old mare back.

TSU’TEY
(subtitled)
This alien will learn nothing. A rock Sees more.

She sighs in agreement. Tsu’tey and the other hunter wheel their horses around and THUNDER OFF into the woods.

NEYTIRI gestures to Jake’s horse.

NEYTIRI

Again.


OPS CENTER - NIGHT

CUT TO:


Grouped around a table are JAKE, COLONEL QUARITCH, SELFRIDGE and few ENGINEERS and OFFICERS. Jake is talking them through plans he’s made of Hometree’s inner structure.

JAKE
You’ve got outer columns, then a secondary ring here, and an inner ring. Then a core structure, it’s like a spiral, that’s how they move up and down.

QUARITCH
I’m going to need accurate scans of all these columns.

JAKE
Roger that.

ANGLE ON MAX, at the stairwell. He’s been watching Jake talking rapidly to Quaritch, but can’t hear him. Frowning, he backs away, down the stairs.
CUT TO:

INT. BIO LAB - DAY

JAKE, GRACE and NORM are packing science gear and supplies.

GRACE
I’m not about to let Quaritch and Selfridge micro-manage this thing.
(she looks pointedly at Jake) We’re going up into the mountains.
(MORE)

GRACE (cont'd)
There’s a mobile link up at Site 26 that we can work out of.

NORM
The Hallelujah Mountains?

GRACE
That’s right.

NORM

Yesssss!
(off Jake’s look)
The legendary Floating Mountains of Pandora? Heard of them?


EXT. RAINFOREST - AERIAL - DAY




CUT TO:


A SAMSON THUNDERS over the rainforest, climbing into the mist- shrouded mountains.

In the SEALED COCKPIT, Norm is up front, sitting left seat so Trudy can talk him through the flight controls. Jake and Grace are behind them, in the jump-seats.

Grace and Norm’s UNCONSCIOUS AVATARS ride in the open back compartment.

TRUDY
It only takes tiny inputs. Here, put your hand on the cyclic --

She points to the stick between her knees. Norm hesitantly reaches over and rests his hand on hers.

TRUDY
Feel how small the moves are? You barely have to think it, and the aircraft reacts.

ON NORM -- reacting to tiny inputs from the hot lady-pilot. THE SAMSON is dwarfed by enormous ARCHES OF ROCK.
GRACE
See these magnetic formations. We’re getting close.

TRUDY
Yeah we are. Look at my instruments.

On the dash, many of the displays are fritzing out.



GRACE
Yup. We’re in the flux vortex. AHEAD, a cloud bank parts, revealing --
THE HALLELUJAH MOUNTAINS. Right in front of them.

NORM
Oh. My. God.

Jake leans forward between the seatbacks for a good look out the front canopy.

JAKE’S POV -- enormous islands of rock are hovering a half mile above the ground. They are overgrown with rainforest, and straggly beards of vines hang down beneath them.
Waterfalls stream down the sides and dissolve into spray at the bottom.

ON JAKE, staring in amazement. It is both awe-inspiring and disturbing.

Trudy turns, grinning at Jake.

TRUDY
You should see your face.

WIDE AERIAL -- the Samson is tiny as it approaches the floating islands of rock. An archipelago among the clouds, they cast great shadows over the forested slopes below.

JAKE (V.O.)
Yeah, so what does hold them up? Grace explained it to me -- some kind of maglev effect because unobtanium is a superconductor, or something. At least somebody understands it. Just not me.
CUT TO:

EXT. SITE 26 - DAY

A remote RESEARCH STATION -- TWO SHACKS and a few clusters of instruments perched on a promontory near the Hallelujah Mountains. The shacks are AIRLIFT MODULES the size of buses.

THE SAMSON LANDS, beating the grass with its rotor-wash. The humans hop out, wearing MASKS.

They move toward the Shack, taking in the spectacular panorama.
CUT TO:



INT. SHACK - DAY

NORM and TRUDY assist JAKE with his chair as they cycle in through the AIRLOCK. GRACE is already inside, starting the GENNY. She turns on the lights and equipment.

There are 4 bunks, a clutter of science gear, and -- through a short connecting corridor -- THREE LINK UNITS in the second module.

As Grace powers up the Link equipment, Jake stops to look at STEREO STILL PICTURES which are taped and tacked up around her workstation.

CLOSE ON PICTURES -- Grace posing at the school with various grinning children. There is one of her with two lanky girls, a younger Neytiri and an older girl who looks much like her.

GRACE
Jake, take number two, it’s the least glitchy. Norm, I need you to operate Jake’s link.

Norm glares at Jake as he passes.

JAKE
Hey. You got a problem?

Norm turns to Grace, his frustration boiling over.

NORM
I trained three years for this mission. I speak the language fluently.
(he points at Jake)
He falls off the frickin’ turnip truck and all of a sudden he’s cultural ambassador!?

GRACE
It’s not our choice, Norm.

He glowers at Jake.

NORM
Yeah, well I didn’t come out here to wash the dishes while you’re on some interspecies booty call.

He stalks off.

GRACE
He can’t go far.




She points to Jake’s link.

GRACE
Let’s get you in.


INT./EXT. HOMETREE - BANSHEE EYRIE




CUT TO:


LOOKING DOWN the central shaft of Hometree, 80 meters to the ground. Villagers are ant-like.

Jake tries to keep up with Neytiri as she leaps up the core trunk like a lemur. He climbs the last section, arriving out of breath beside her. She leads him OUTSIDE, onto --

A large branch. Through gaps in the foliage Jake can see other Great Trees scattered across the landscape, like enormous umbrellas above the rainforest.

NEYTIRI strides out across the branch toward some kind of STRUCTURE -- a WEB made of thick woven fiber. DARK SHAPES clinging to it stir with a leathery RUSTLING SOUND.

Neytiri makes a series of TRILLS and CLICKS. One of the shapes MOVES toward them, emerging into a shaft of sunlight.

A huge MOUNTAIN BANSHEE. Much larger than the forest banshees, this thing is taller than a Na’vi with a 10 meter wingspan. A leathery FWHOOP, like the crack of sails, as it alights on the branch right in front of her.

JAKE
Holy shit.

NEYTIRI
Do not look in her eye.

Neytiri feeds it a large scrap of meat, which it SNATCHES and gulps down. She murmurs to it and strokes its NECK.

It lets out a signature SHRIEK, and some of the others in the shadows nearby answer.

Neytiri flip-catches her queue and gently connects it to the Banshee’s ANTENNA. It shivers and stretches its wings as the neural connection is made.

NEYTIRI
Ikran is not horse. Once shahaylu is made, ikran will fly with only one Hunter in the whole life.

She climbs smoothly onto the animal’s back.



NEYTIRI
To become taronyu -- Hunter -- you must choose your own ikran. And he must choose you.



When?
JAKE


NEYTIRI

When you are ready.

The BANSHEE shivers with anticipation.

NEYTIRI
Heeyaaahh!

Jake ducks as the great wings EXPLODE OPEN and the banshee DROPS off the branch. It swoops down across the forest canopy, banks hard, lets out a CRY and beats its wings in a power climb.

Completing the bank, Neytiri directs the banshee into a close SWOOPING FLYBY, and Jake instinctively ducks.

ON NEYTIRI -- flying in perfect fusion with her winged mount, the rainforest rolling beneath her.
CUT TO:

INT. SHACK - NIGHT/EXT

STEREO VIDEO-LOG IMAGE -- Jake has just switched on the camera. He looks tired.

JAKE
Do I have to do this? I need some rack.

GRACE, behind him, looks up from her MICROSCOPE, scowling.

GRACE
No -- now, when it’s fresh.

JAKE
Yeah, yeah.
(to camera)
The days are starting to blur together. The language is a bitch, but I figure it’s like field-stripping a weapon.
Repetition.

THIS THROWS US INTO A TEACHING MONTAGE:

JAKE AND NEYTIRI kneel together inside Hometree. Neytiri touches her lips with her fingertips.



JAKE
Seyri.

She touches her nose, her ears, her eyes in quick sequence.

JAKE
Ontu, mikyun, nari.

NEYTIRI stands next to him, correcting his position as he draws a longbow.

BARKING commands, she SMACKS him on the shoulder, then the elbow, repositioning him roughly.

JAKE (V.O.)
Neytiri thinks I’m some kind of retard.

HUMAN JAKE emerges from the LINK to see --

TRUDY and NORM caught IN THE ACT on Norm’s bunk. Norm blushes and Trudy waves, pulling the blanket over their heads.

JAKE (V.O.)
Norm’s attitude has improved lately.

NORM works with JAKE at the small table in the SHACK kitchen.



Thank you?

Ireiyo.
NORM JAKE

Norm comically exaggerates the pronunciation.
NORM
Irrrreiyo. Irrrreiyo. You’ve gotta roll the R, r-r-r-oll it.

Norm makes Jake repeat the word, getting more frustrated.

JAKE (V.O.)
It’s good he’s back on board, but he thinks I’m a retard too.

TRACKING WITH JAKE’S FEET as he runs over rocks, leaping onto a thick root, running on across the rough bark.

JAKE (V.O.)
My feet are getting tougher. I can run farther every day.



Neytiri leads him along a massive root, and soon they are running 30 meters above the ground.

He sprints with her through the trees, trying to keep up. She CLIMBS and LEAPS with the ease of a spider monkey.

JAKE (V.O.)
I have to trust my body to know what to do. With Neytiri it’s learn fast or die.

Neytiri LEAPS off into space, falling, falling until --

She catches an enormous palm leaf and, gripping it, allows its DROOP to slow her fall. She lets go, plummeting, and catches another.

JAKE FOLLOWS in a leap of faith. THE CAMERA PLUNGES with him, from leaf to leaf, down and down in a dizzying kinetic rush.

He drops down from the last leaf, landing next to her on a game trail. He is exhilarated to still be alive.

Neytiri is surprised -- that he followed. That he lived.

TIGHT ON HUMAN JAKE, in the shack. Thinking as he looks at the pictures of Grace with the laughing kids at the school.

IN THE COMMONS -- AVATAR NORM formally greets MO’AT. The Matriarch looks on as GRACE kneels to hug children she knows. Grace’s eyes sparkle as she chats with them in Na’vi.

JAKE (V.O.)
I sweet-talked Mo'at into giving Norm and Grace a hall pass. Now Grace even makes me coffee before link every morning.

Grace looks up to see Neytiri approaching. It is an awkward moment between them. Grace makes the formal gesture of greeting.

GRACE
(Na’vi, subtitled)
I See you, Neytiri Mo’at’ite.

NEYTIRI
I See you, Doctor Grace Augustine.

ANOTHER DAY -- NEYTIRI kneels on a game trail, pointing out the tracks in the mud to Jake. She touches the edges of the plants around her, and sniffs the air.



JAKE (V.O.)
I’m learning to read the trails, the tracks at the water-hole, the tiniest scents and sounds.

JAKE AND NEYTIRI watch through a screen of leaves as --

A HERD of huge, armored STURMBEEST walks through the shallows of a lake. In the middle of the herd, the babies are sheltered from predators among their parents' legs.

One of the BULLS trumpets, and a flock of TETRAPTERONS takes flight, an explosion of purple wings.

Jake stares at the strange and wild alien tableau.

ANOTHER PLACE -- NEYTIRI STANDS utterly still, except for her ears, which move with a life of their own. Her eyes are closed. She speaks very softly to Jake --

NEYTIRI
When you hear nothing, you will hear everything. When you see nothing, you will See everything.

JAKE (V.O.)
Sometimes I have no idea what she’s talking about.

Jake and Neytiri creep quietly, stalking a large male
HEXAPEDE -- a six legged deer-like creature.

Jake expertly nocks an arrow and draws his bow as Neytiri watches. He takes a bead on the hexapede -- tracks it for a beat with the drawn bow, then RELAXES his arm. Zen archery.

JAKE (V.O.)
It’s been a month and I’m still not allowed to make a kill. She says the forest hasn’t given permission.

OMIITED

NEYTIRI and JAKE crawl through the undergrowth. She points and he parts some leaves to see --

A MOTHER VIPERWOLF bringing meat to her cubs, which frisk around her legs. She licks their faces.

JAKE (V.O.)
There’s a lot of crap like that. She’s always going on about the flow of energy-- the spirits of the animals and what not --



VIDEO-LOG IMAGE -- HUMAN JAKE talks into the lens. He’s changing -- un-shaven, cheeks hollow. Pale.

JAKE
(smirking)
I just hope this treehugger shit isn’t on the final.

Visible behind him, Grace is hunched over her samples.

GRACE
(without looking up)
This isn’t just about eye-hand coordination out there. You need to listen to what she says. Try to see the forest through their eyes.

JAKE
Excuse me -- this is my video-log here, okay?

NEYTIRI AND JAKE move through the NIGHT FOREST, surrounded by galaxies of shimmering bioluminescence. They move gracefully, soundlessly -- two forest spirits.

CU JAKE -- the pupils of his cat eyes dilated. The night forest floods his brain with its million bio-sources.

NIGHT SHOT, from overhead -- Jake and Neytiri bow-fishing from a dugout canoe over huge glowing ANEMONES at the bottom of a pool.

A large fish swims silhouetted against the pastel glow. ZAP! Jake drills it. He holds up the fish, triumphantly.

ANOTHER DAY -- Neytiri stands close behind Jake, adjusting his position as he draws his bow. Only now her hands are GENTLE as they move on his arms, his shoulders.

Aware of her touch, Jake’s focus is broken. Their eyes meet, and she pulls away quickly.

NIGHT -- they enter a CLEARING filled with chest-high ferns. Neytiri signals him to move slowly. They approach a creature on one of the ferns. An ugly, stick-like LIZARD-THING perched on a frond. As he approaches --

SNAP! A long spine whips in a circle, unfurling a bioluminescent membrane -- a disk a meter across, opening like a Chinese fan. It FLIES OFF, a living Frisbee.

THE FAN LIZARD FLOATS across the clearing.



Neytiri plunges among the ferns with a SHARP CRY. An EXPLOSION OF COLOR as dozens of FAN LIZARDS take flight.

Grinning widely, she hops around like a little girl, until they are all flying. And for the first time, she is unguarded and joyful, totally herself with him.

INSIDE THE LINK -- Jake’s eyes open in the darkness. He doesn’t know where he is. He weakly pushes open the lid, blinking at the light.

JAKE (V.O.)
Everything is backwards now. Like out there is the true world, and in here is the dream.

TIGHT ON AVATAR JAKE silently drawing his bow, his eyes focused in intense concentration. A beat -- the arrow flies.

JAKE PULLS the arrow from the twitching body of a hexapede. He dispatches it with his knife.

He speaks haltingly, but with feeling, in Na’vi.

JAKE
(Na’vi)
I See you Brother, and thank you. Your spirit goes with Eywa, your body stays behind to become part of the People.

NEYTIRI watches with approval.

NEYTIRI
A clean kill. You are ready.
CUT TO:

INT. SHACK - NIGHT

Lying in the link, Jake looks exhausted, pale, thin. Norm helps Grace get him to his chair.

GRACE
You’re still losing weight. Here --

She hands him a microwaved burrito. He looks at the now alien food. Bites into it without enthusiasm.

JAKE
I made a kill today. We ate it. I know where that meal came from.



GRACE
Other body. You need to take care of this body.



Yeah yeah.
JAKE


GRACE

Jake, I’m serious -- you look like crap. You’re burning too hard.

Jake takes the cigarette out of her mouth and stubs it out.

JAKE
Get rid of this shit, then you can lecture me.

GRACE
I’m telling you, as your boss and someone who might even consider being a friend someday, to take some down time.

JAKE
Not now. Tomorrow we leave for Iknimaya.

GRACE walks past Jake, starts making herself coffee.

GRACE
Yeah -- you’re gonna go ride a banshee. Or die trying.

JAKE
That’s right, Grace. This is what I’ve been working for.

GRACE
And this is your check up from the neck up, Marine. You’re getting in way too deep.
(she turns away)
Trust me, I learned the hard way.

Jake scans the pictures tacked up around Grace’s workstation.

JAKE
What did happen at the school?

GRACE looks up from making coffee. Her eyes track across the pictures of the laughing children. Finally --



GRACE
Neytiri’s sister -- Sylwanin -- stopped coming to school. She was angry about the clear-cutting.

GRACE sips her coffee, grimaces at the taste.

GRACE
One day, she and a couple of other young hunters came running in, all painted up -- they’d set a bulldozer on fire -- I guess they thought I could protect them.

GRACE’S voice stays oddly CALM as he tells this terrible story, while getting MILK out of the refrigerator.

GRACE
The troopers pursued them to the schoolhouse.

MACRO as she pours the milk -- her hand is SHAKING.

GRACE
They killed Sylwanin in the doorway. Right in front of Neytiri. Then shot the others.
(mildly)
I got most of the kids out, before they shot me.



Jesus.


Yeah.
JAKE GRACE

Jake realizes that Grace is on the verge of tears and desperately trying to hide it.

GRACE
A scientist stays objective -- we can not be ruled by emotion. But I poured ten years of my life into that school. They called me sa’atenuk. Mother.
(turning to him)
That kind of pain reaches back through the link.

GRACE sits down at the table, looks intently at Jake.

GRACE
It’s a job. Learn what you can -- but don’t get attached.




GRACE looks at him with real PAIN in her eyes.

GRACE
It’s not our world, Jake. And we can’t stop what’s coming.


EXT. MOUNTAIN TRAIL - DAY





CUT TO:


TSU’TEY leads three direhorse riders up the trail -- two TEENAGE HUNTERS and JAKE, who’s riding well enough to keep up. The horses’ hooves CLOP right next to a sheer drop into a misty canyon.

JAKE (V.O.)
Iknimaya translates roughly as stairway to heaven. It’s the test every young hunter has to pass.

TSU’TEY signals a stop.

UP-SLOPE AHEAD is an astounding formation. Thick vine-like trees have trapped large FLOATING BOULDERS of UNOBTANIUM in their gnarled grip.

A hundred meters above them more boulders are WOVEN into the twisted vine-trunks. This is some sort of freak natural occurrence -- like the mythical beanstalk, going up into the clouds.

There is a THUNDERING ROAR, like an artillery barrage, and the ground SHAKES. Jake looks around at --

One of the FLOATING MOUNTAINS grinding against the flank of a nearby mesa. A huge rockfall is set loose. The mountain is drifting toward them, filling half the sky.

The Hunters dismount.

JAKE looks up at the beanstalk going into the clouds. He turns to Tsu’tey, who is checking the young hunters’ gear.

JAKE
We doin’ this?

Jake leaps to catch up as Tsu’tey and the hunters swarm up the base of the beanstalk.
CUT TO:



EXT. BEANSTALK - DAY

200 METERS up the BEANSTALK, the hunters nimbly climb along the vine-trunks. They clamber over one of the unobtanium BOULDERS which is lifting this incredible tree.

JAKE looks down -- the massive trunk dwindles to the size of a licorice stick. A chunk breaks off a boulder as he climbs over it -- it floats upward.

They reach the upper branches of the beanstalk. Above them, the craggy underbelly of MONS Veritatis looms. Spray from one of the waterfalls hits them.

Some of the HANGING VINES are brushing over the upper branches of the beanstalk with a crackling hiss.

One by one the hunters grab onto vines as they pass.

Jake shrugs and leaps to a passing vine, his feet dangling over nothingness. They climb toward the floating islands above.

EXT. MONS VERITATIS - DAY

TINY FIGURES cross a causeway of vines connecting a small island of unobtanium to the main mass of Mons Veritatis.

WIDE SHOT looking down a rock face bigger than Half Dome -- the sheer side of Mons Veritatis.

Banshees circle next to the cliffs, flashing in shafts of sunlight. Waterfalls dissolve into nothingness below.

EXT. GROTTO/BANSHEE ROOKERY - DAY

A waterfall THUNDERS down into the void like a faucet of the gods. Jake looks down the sheer cliff at the world far below
-- a view from Olympus.

A SHRIEK and the THWAP THWAP of leathery wings -- NEYTIRI’S BANSHEE swoops in to perch at the edge of the grotto. She dismounts and, like a falconer, covers its eyes with a woven HOOD. It waits, docile, as --

She joins Jake and the hunter party. Tsu’tey leads them through the cave until they emerge onto a CLIFF FACE. And Jake sees --

The BANSHEE ROOKERY. HUNDREDS of banshees huddle on rock out- croppings as far as the eye can see. They cling to the walls with the fore-claws on their wings, or perch on ledges.



TSU’TEY
Jakesully will go first.

Tsu’tey smirks at Jake, a challenge in his eyes. The two teenage Hunters are scared but trying to act tough.

Tsu’tey scowls when Neytiri leads Jake out onto the ledge.

NEYTIRI
(whispering)
Now you choose your ikran. This you must feel -- inside. If he also chooses you, move quick, like I showed. You will have one chance.

JAKE
How will I know if he chooses me?

NEYTIRI
He will try to kill you.

JAKE
Outstanding.

Out of sight of Tsu’tey, Neytiri takes his hand and squeezes it. Jake feels a rush of emotion, but she breaks away like it didn’t happen. He is on his own, on the ledge with --

The BANSHEES. They eye him as he approaches. Several SHRIEK and take flight. Others flap their wings and yawn, showing rows of fangs, in a threat display.

Jake unrolls a weighted leather strap, like a one-ended BOLO.

A LARGE MALE spreads enormous wings, SHRIEKS, and glares straight at him.

Jake looks directly into its eyes -- and strides toward it.

JAKE
Let’s dance.

The challenged banshee HISSES and leaps at him, jaws wide as--

Jake times the lunge, swinging the bolo, feinting and then slipping aside as the banshee’s jaws miss him, SNAPPING SHUT.

Jake WHAPS the bolo across its snout. The weighted thong whips twice around its long jaws, tying them shut. A MUFFLED SCREAM and it SLASHES at his stomach with razor talons but --



Jake is already leaping, over the talons and tackling the banshee around the neck. It topples on its side, and he SWARMS IT -- arms around its thrashing head.

Jake grabs its whip-like antenna and brings it toward his queue but --

The bony head SLAMS sideways, and BAM! -- clocks him right in the face, almost knocking him out and --

IT WRITHES, flinging him to the ground. He slides on the rock and almost goes over the edge as --

NEYTIRI gasps. Tsu’tey laughs and yells mockingly.

The bolo is coming loose as the creature shakes its head, way pissed off now, but --

Jake scrambles up and leaps straight at it. Claws rake his leg but he gets his arms around its head and CLAMPS DOWN HARD. They flop to the ground and he scrambles on top, pinning it and --

Grabs its whipping antenna, locks it under his arm, and jams the end of his queue into it. They FUSE together and --

The banshee stops struggling. It lies there panting. They are locked together, literally eye to eye.

JAKE
That’s right! You’re mine.

ECU BANSHEE -- the pupil like a deep black well.

Jake relaxes his grip and slowly, warily, slides his leg over the creature’s back.

Neytiri runs to him.

NEYTIRI
First flight seals the bond. You cannot wait.

Jake sits astride the creature, feeling its power. He grips a hank of the beast’s main, and --

JAKE
Heeeyyyaaaah!

THWAP! THWAP! The banshee is off like a shot. Jake SCREAMS as they PLUMMET off the cliff -- the banshee WAILS and --



They fall together, spiralling out of control, and he is almost tossed lose. The thing is SQUAWKING and SHRIEKING so much he can't think.





It does.
JAKE
Shut the hell up!!



JAKE
Level out! Fly straight!


It levels out. Jake cocks his head, only thinking “bank left” and the animal complies. He settles the banshee into an easy loping beat of its huge wings, while he catches his breath.

NEYTIRI’S BANSHEE falls into formation with him. She signals “follow me” and DIVES.

Jake guides his banshee clumsily after her. Neytiri’s banshee moves with precise movements of its wingtips, while Jake’s wobbles and dips, almost falling out of the sky.

THE CAMERA SWOOPS after them as Neytiri leads an arcing DIVE around the flank of Mons Veritatis. The scenery is stunning. They pass waterfalls and swoop between hanging vines.

Neytiri leads Jake in a sharp bank, skimming close to the cliffs. They punch through streamers of cloud and emerge into sunlight.

Jake is getting the hang of it. He jinks left, then right, then dives, tucking himself tight against the animal’s back. He’s reckless, fearless. Half in control and LOVING IT.

Neytiri dives next to him as he lets out a long WHOOP of joy.
CUT TO:

INT./EXT. GROTTO/MONS VERITATIS - DAY FLIGHT MONTAGE:
NEYTIRI squats with Jake, using her hands to explain flight principles like one fighter pilot to another.

LOOKING DOWN a sheer cliff. SWOOOSH! Jake and Neytiri dive their mounts STRAIGHT DOWN PAST CAMERA, pulling out and soaring into a series of aerobatic turns.

JAKE (V.O.)
I may not be much of a horse guy. But I was born to do this.



THEY FLY in close formation with TSU’TEY and the young HUNTERS, 5 banshees flashing through scarves of mist.

ANOTHER DAY. Jake dives, playing hide and seek with Neytiri among the clouds. They are wild and free in a wild world.
She grins and banks hard, diving -- catch me if you can. He DIVES after her.

IN THE GROTTO, by firelight, JAKE’S BANSHEE snaps at a piece of meat which he playfully pulls back. He’s teaching it to take the food more slowly. He strokes its long head.

TSU’TEY is nearby with the young hunters. He eyes Jake with frustrated hostility.

ANOTHER DAY -- Jake and Neytiri fly abreast, soaring easily. She points and Jake sees --

A BIZARRE GEOLOGICAL FORMATION. Arches of magnetic rock form rainbows of stone above a deep CALDERA. In the center of the caldera is a single, enormous WILLOW TREE, gnarled and ancient. This, we will be told, is THE WELL OF SOULS.
CUT TO:

EXT. RIDGE

JAKE flies with Neytiri along a forested ridge. She is
teaching him to hunt from his banshee. They carry their bows at the ready, scanning below them for prey.

A HUGE SHADOW covers him and Neytiri SHOUTS a warning. Jake looks up to see --

A LEONOPTERYX in a delta-dive, whistling straight at him.

Like a banshee, only several times larger, it is the king predator of the air: the GREAT LEONOPTERYX.	Striped scarlet, yellow and black, with a midnight blue crested head
-- it is both gorgeous and terrifying.

The hunter has become the prey. JAKE snap-rolls and dives toward the forest canopy. He plummets into the gloom as --

K-CRASH -- the leonopteryx tears through foliage, following him down, both diving like missiles and --

JAKE yanks into a hair-pin bank, right through a gap between two huge branches --

Forcing the leonopteryx to brake with a loud FWOOSH of wings. It banks away with a frustrated SHRIEK. Two flaps of its mighty wings and it is gone, back above the canopy.



CLOSE ON THE LEONOPTERYX, as its fanged mouth opens in a bloodcurdling SCREECH which echoes among the mountains. The lord of its domain.

ON JAKE, shaken. Neytiri flies up, her expression the Na’vi equivalent of Oh my God. A beat -- they both crack up.
CUT TO:

INT. SHACK - NIGHT

Jake ponders images Grace has called up at her workstation-- science graphics of the Leonopteryx. Trudy and Norm are crowded around as well.

GRACE
The Great Leonopteryx is the apex aerial predator. Not only rare, but the sightings tend not to get reported.

Trudy makes a clicking motion with her thumb.

TRUDY
There usually isn’t time to key the mike.
JAKE
The People call it Toruk.
NORM
(translating) Last Shadow.

JAKE
Last one you ever see.
TRUDY
I saw one take out a gunship once -- WHAM! Total frickin’ yard sale. Ate the crew like peanuts.

TIME CUT -- Grace is scanning through images and Jake stops her on one -- a 3D aerial shot of the strange arched formation.



That’s it.
JAKE


GRACE

Vitraya Ramunong -- The Well of Souls. It’s their most sacred place.

She moves the virtual camera, and we seem to fly around the Well of Souls, catching only a glimpse of the interior.



GRACE
Something big is going on in there, biologically. I’d die to get samples, but outsiders are strictly forbidden.

TIME CUT -- Jake looks through the pressure window at HUMAN GRACE and NORM outside. Wearing masks, they are taking readings from some time-series experiments Grace has set up.

As TRUDY watches, JAKE works fast to download Grace’s images of the Well of Souls onto a memory chip.

TRUDY
They’re coming back.

Jake pulls the chip, then hesitates. Torn by what he is doing.

TRUDY
If you don’t give him something, he’s gonna shut us down.

He hands her the chip and she slips it into a pocket of her flight-suit just as Grace and Norm enter from the airlock.

JAKE

Hey, guys.


INT. HOMETREE - NIGHT

CUT TO:


JAKE STARES up at the TOTEM SKULL, which we now recognize as that of a GREAT LEONOPTERYX. NEYTIRI watches as he reaches up to touch the tall indigo crest.

NEYTIRI
My grandfather’s grandfather was Toruk Macto -- Rider of Last Shadow. Toruk chose him. It has only happened five times since the time of the First Songs.

JAKE
That’s a long time.

Neytiri takes his hand, because that’s what the Na’vi do when they’re telling you something important.

NEYTIRI
Toruk Macto was mighty -- he brought the clans together in a time of great sorrow. All Na’vi people know this story.




PUSH IN SLOWLY on the skull totem, then --


EXT. RIVER BED - DAY

CUT TO:


JAKE, NEYTIRI and other FLYING HUNTERS swoop low above a HERD OF STURMBEEST -- a rapids of thundering muscle. Dust rises from this living river like steam from a python's back.

TRACKING WITH the herd. A HUNTER appears in FG, astride a direhorse at full gallop. The sight is breathtaking. He hurls a 3 meter spear and one of the sturmbeest CRASHES down, flipping twice from momentum.

JAKE ROLLS IN like a fighter jet, his banshee screaming. He draws and fires his bow. The arrow strikes true, in the plexus between the armored shoulders and --

THE BEAST crashes to the ground. Skids to a stop in a cloud of dust.

NEYTIRI swoops in next to Jake, arms raised and grinning wolfishly.

CU TSU’TEY, banking around Jake’s kill. Jake looks up, and Tsu’tey SALUTES in grudging admiration.
CUT TO:

INT. COMMONS/HOMETREE - NIGHT

The central space is lit by a BONFIRE, around which the HUNT FESTIVAL is in full swing. Wild dancing. People gnawing on massive sturmbeest ribs. A bowl of some kava-like intoxicant is passed around.

NEYTIRI dances in a flowing costume as the BANSHEE SPIRIT. NORM is dancing seductively with his own tail.

JAKE, surrounded by young hunters, acts out the leonopteryx attack with his hands. The leaping fire-light plays across the eye sockets of the TORUK SKULL, bringing it to life. It seems to watch Jake.

TSU’TEY squats next to Jake, the usual scowl on his face.

Jake braces himself -- and Tsu’tey holds up the KAVA BOWL, offering it to him. A challenge or an olive branch?

Jake takes a long, hearty drink as some of the young hunters hoot and clap hands in a fast rhythm.



GRACE
Watch that stuff. It’ll knock you into next week.

Jake offers the bowl back to Tsu’tey. They lock eyes. Tsu’tey drinks.

LATER -- AN EMPTY BOWL drops, landing on a pile of empty bowls near the fire.

WIDER ON JAKE and TSU’TEY, sitting amid the rowdy hunters. Tsu’tey looks a little blearily at Jake. Finally, he GRINS.

TSU’TEY
I thought -- enough drink -- you would not be so ugly.

JAKE
Sorry.

Tsu’tey looks deep into the fire.

TSU’TEY
Your warriors -- hide inside machines -- fight from far away.
(he looks at Jake)
I did not think a sky person could be brave.

Before Jake can answer, NEYTIRI’S lithe shape runs through the circle of silhouetted dancers toward them. She takes Jake by the hand and pulls him up --

NEYTIRI
You must dance! It is the way.

TSU’TEY watches as she leads him away, his face darkening -- the moment of connection to Jake lost to anger.

The hunters WHOOP and CHEER as Jake joins the circle of dancers.

Jake takes Grace’s hand and pulls her up, protesting.

JAKE lets the DRUMS and CHANTING flow through him. He lets himself go, dancing from the inside, channeling the primal energy.

GRACE is rocking out, grinning. We see the young girl, so repressed, who lives within her.

Jake and Neytiri flow amongst the dancers, but they are looking only at each other.



A couple of the young girls watching from outside the circle are giggling and talking about them. Mo'at and EYTUKAN follow their look, seeing the obvious connection.

MO’AT
(subtitled)
We cannot let this seed grow. Her path is with Tsu’tey.

ON JAKE, dancing with abandon to the primal beat, eyes locked with Neytiri.
CUT TO:

EXT. RAINFOREST - DAY

WIDE VISTA -- mist blowing through the treetops as the
morning sun burns it away. A spectacular panorama of a vast, primeval land.

UP ANGLE TRACKING among the trees, the sunlight shafting down like light in a cathedral.

JAKE (V.O.)
It’s hard to put in words the deep connection the People have to the forest.

HIGH IN THE BRANCHES of a tree, Jake watches as Neytiri gently bends a large pitcher-like flower toward her, sipping nectar which is sweet and thick as honey. An incredibly sensuous image.

JAKE (V.O.)
They see a network of energy that flows through all living things. They know that all energy is only borrowed--

MACRO SHOT of a purple flower, beaded with raindrops. A blue hand picks the flower.

JAKE (V.O.)
-- and one day you have to give it back.

LOOKING DOWN into a hole dug among tree roots. The body of an old Omaticaya WOMAN lies curled there like an unborn baby in the womb of the earth. The purple flower is gently placed on her body, joining flowers, totems and beads.

Mo'at recites a prayer as Neytiri, acting as acolyte, places a WOODSPRITE, a seed of the Great Tree, on the body.

Earth is poured over the LENS and we CUT TO --



JAKE WAKING UP in the Link. DARK as a coffin. He pushes the lid off, letting in light, and lies there. He looks pale and haggard, with a scraggly beard.

JAKE (V.O.)
Hard to believe it’s only been three months.

JAKE SITS in front of the video log camera, late at night. It is many log entries later. He has lost a lot of weight. He looks like a junkie watching a test pattern.

JAKE
(to the lens)
I can barely remember my old life. I’m not sure who I am anymore.
CUT TO:

EXT. COMPOUND - DAY

Under a sky of thunderheads, the forest is a dark wall beyond the fence. SELFRIDGE, wearing an exopack, TEES UP while GRACE and JAKE approach from the direction of the Ops Center.

SELFRIDGE
Good of you to stop by. How’s it going out there? Our blue friends all packed up yet?

Selfridge swings his DRIVER with good form.

SELFRIDGE
See, I keep hooking it. It’s the damn pack.

THE BALL drops into the mud just past a marker which reads
220. A TROOPER walks over to retrieve it.

SELFRIDGE
The low gravity and the high air density cancel out so --

JAKE
You called us back to report -- you want to hear it or not?

SELFRIDGE
Go ahead.

GRACE
Jake is making incredible progress, years worth in just a few months. But -- we need more time.



SELFRIDGE
Not what I was hoping to hear.

It starts to rain. Selfridge calmly pulls an umbrella from his golf bag and snaps it open.

GRACE
Parker, it’s their ancestral home. They’ve lived there since before human history began. You can spare them a few more weeks.

SELFRIDGE
This thing is inevitable. What does it matter when it happens? I’m sorry, Dr. Augustine. You’re out of time.

He leaves them standing there to get drenched.
CUT TO:

INT. ARMOR BAY

A break table, under a harsh overhead light. Quaritch pulls up a chair, turns it around, and sits astride it facing Jake. He studies Jake’s pale, sunken face. The scraggly beard.

QUARITCH
You’re not gettin’ lost in the woods, are you son?

Jake can’t meet his eyes.
QUARITCH
Your last report was two weeks ago. I’m starting to doubt your resolve. From what I see, it’s time to terminate this mission.

Jake eyes flare with alarm.

JAKE
No. I can do this.
QUARITCH
Look, you’ve given me plenty of usable intel. Like this “Well of Souls” place -- I’ve got them by the balls with that, when it turns into a shit-fight. Which it will.

Jake feels hollow inside, knowing what he’s done.



QUARITCH
So you’ll get your legs back, like I promised.
(puts his hand on Jake’s shoulder)
It’s time to come in.
Jake ponders this. Isn’t this what he was doing all this for?
JAKE
I’ve gotta finish this thing. There’s one more test -- the Dream Hunt. It’s the final stage of becoming a man. Then I’m one of them. They’ll trust what I say...
It’s hard for him to even form these words -- JAKE
... and I can negotiate the terms of
their relocation.
QUARITCH
Then you need to get it done, Corporal.
CUT TO:

EXT. HALLELUJAH MOUNTAINS - NIGHT

Strange horizontal LIGHTNING branches through the floating mountains, twisted by the magnetic fields. The sky is black and heavy with clouds.

INT. SHACK KITCHEN - NIGHT

Jake is gulping black coffee like a tequila shot, looking pretty STRUNG OUT. GRACE is smoking furiously.

GRACE
Jake, I can’t allow this. You’re just not strong enough.

JAKE
It’s the last door -- I’m going through it. You can help me or get out of the way.

Jake pushes past her toward the corridor --

GRACE
(grabbing him)
Will you listen to me? Sometimes the Na’vi themselves die in these vision quests. The venom takes you to the edge of death.
(MORE)

GRACE (cont'd)
And the psychoactive alkaloid in the worm-
- we have no idea what that’ll do in an avatar brain.

Jake breaks free and wheels away, down the corridor.

GRACE follows JAKE as he crosses to the Link. A sheet of LIGHTNING flashes across the sky outside.

Norm is initializing the Link.

NORM
Calibrating. Thirty seconds.

She puts her hands on his shoulders.

GRACE
No matter what you prove out there-- you are still in here.
(shaking him) Right here.

JAKE
I have to go all the way -- become one of them--

GRACE
(furiously)
Goddammit, Jake, you can never be one of them!

Norm looks up, startled at the VEHEMENCE in GRACE’ voice.

GRACE
Our life out there takes millions of dollars of machinery to sustain. You visit -- and you leave.

During this, Jake pulls himself from his wheelchair, levering himself into the Link, hauling his useless legs inside.

GRACE
(softening)
You can never truly be with her.

Jake stops, pinioned by the truth. He seems suddenly very lost.

JAKE
You know why I’m here? Because Quaritch sent me.

NORM
What?



JAKE
That’s right -- to embed with the Omaticaya. To find out how to screw them out of their home. By deceit or by force, he didn’t care. And if it turned out to be force, then how best to do it.

Norm is in shock. But Grace is eerily calm.
GRACE
And what about now, Jake?
JAKE
I’m not that guy any more.

Grace nods. She’s been on his journey every step of the way.

GRACE
I know.

JAKE
But if I tell Quaritch the truth, he yanks me out -- I never see her again. And if I tell her the truth, the clan throws me out -- that’s if they don’t cut my heart out and show it to me.

Jake looks hopelessly at the two of them. In his own perfect Hell.

NORM
They won’t understand what you’ve done.

JAKE
They don’t even have a word for “lie” -- they had to learn it from us.

Grace sees he is on the verge of tears. Lost and alone, between worlds.

GRACE
I know. I taught it to them.

JAKE
(pleading)
Grace. I’ve gotta go. They’re waiting.

NORM
Link is ready.

Grace stops him as he tries to close the lid.



GRACE
Jake. You can’t carry this burden much longer.

JAKE
(smiling wanly)
It’s okay. Mo’at says an alien mind probably can’t survive the Dream Hunt anyway.

Grace closes the lid. It feels like closing a coffin. She watches his psionic patterns aligning to his avatar, somewhere out in the night.

GRACE
(to Norm)
Prep my link. I’m going in.
CUT TO:

INT. COMMONS/HOMETREE - NIGHT

JAKE SITS, eyes closed, as Neytiri and another young hunter paint his face and body in preparation for uniltaron -- the Dream Hunt.

NEYTIRI
When your Spirit Animal comes, you will know.

Their eyes meet with emotion neither can conceal any longer.

TIME CUT. GRACE stands with the crowd at the ramp to HOMETREE’S LOWEST LEVEL. Jake barely sees her as he goes down the spiral. She tries to follow, but is barred by a hunter.

BELOW, seemingly in the womb of the earth, Jake walks slowly into the center of a tight circle of seated elders and hunters. An ELDER is slowly rapping a large WATER DRUM.

TIME CUT -- MO’AT purifies him with smoke from burning herbs, CHANTING in a low monotone. Jake, squatting, washes the smoke over himself with his palms.

MACRO - MO’AT’S FINGERS unwrap a piece of wood riddled with holes. She catches the end of a glowing purple WORM, and draws it out of the wood.

MO'AT
(subtitled)
Oh wise worm, eater of the Sacred Tree -- bless this worthy Hunter with a true vision.



MO’AT places the worm on Jake’s out-stretched TONGUE. It twists on itself, lighting his mouth before he closes it. She indicates he should chew. He does.

MACRO -- AN EARTHEN JAR is opened. EYTUKAN removes a writhing black ARACHNOID, the Pandoran equivalent of a scorpion.

He places it against the back of Jake’s neck and presses. The insect drives its stinger into Jake’s skin and --

Jake grimaces. Mo'at and Eytukan step back, leaving Jake alone in the circle.

Neytiri watches intently, joining in the low chant.

SLOW DOLLY IN on Jake. His eyes OPEN. He looks around at the faces -- they seem to TRANSFORM, becoming threatening.

Jake looks down at the palms of his hands.

JAKE’S POV -- his hands recede, his whole body, the ground and --

INSTANTLY the circle of Na’vi recedes, as if to a distant horizon, leaving vast ground in between. SPACE is utterly distorted, and SOUND as well -- echoing, THUNDEROUS.

ECU JAKE -- pupils DILATED black. He looks around and --

The onlookers are gone, replaced by a ring of glowing trees, which seem miles high. The whole image is bathed in spectral radiance. Jake looks down --

JAKE’S POV -- his body and hands transforming -- fingers stretching into tendrils, legs becoming roots which spread outward across the ground, a thousand glowing dendrites which connect to the roots of the trees and --

CUT TO REALITY -- Jake is on his hands and knees, PUKING in the dirt. He contorts, crying out in agony as the venom contracts his muscles but --

IN HIS VISION Jake stands serene on a FLOATING MOUNTAIN CLIFF. A GREAT BLACK SHADOW covers him, the unmistakable X silhouette of a diving LEONOPTERYX. The LAST SHADOW.

CAMERA SCREAMS down on him as the shadow grows larger -- WE RUSH into his face, into the blackness of his pupil which FILLS THE UNIVERSE and --



REAL JAKE writhes in the dirt, his back arched as his muscles seize. He foams and thrashes, his eyes rolled back in his head, while inside --

TIME ITSELF HAS ACCELERATED -- clouds scream around the mountain tops, mist boils through the forest. He feels the wind of time blowing through him as --

REAL JAKE claws the ground, moaning, staring blindly while -- INSIDE, IN POV he FLIES over the landscape of Pandora --
--but the forest is BLASTED. Fires flicker among trees that are BURNED black and lifeless in a smoky twilight.

A great WINGED SHADOW is cast below, rippling over the devastated ground. AVATAR JAKE looks down at the shadow. Realizes HE is casting it, and we RUSH IN to his PUPIL and --

PULL BACK from the eye of a GREAT LEONOPTERYX, flying lordly and terrible over the land. It lets out an almighty SHRIEK which seems to echo to eternity and --

SLAM CUT to Jake, on his back, GASPING -- back in his body. He weakly rolls up to one elbow and looks around the room.

MO'AT
It is finished.

Neytiri’s face is flooded with relief. The faces of the clan elders look at Jake expectantly.

EYTUKAN
(subtitled)
Did your Spirit Animal come?

Jake looks from Eytukan to Mo'at, Tsu’tey and the elders. How can he tell them what he has seen?

Mo’at puts her splayed fingers against his face, seeming to peer into his troubled soul.

MO'AT
(to Jake) Something has come.
(to the others, subtitled)
It will take time for the meaning to be clear.

She steps back, and Eytukan motions for Jake to stand. He gets up, weakly.



OUTSIDE THE ENCLOSURE -- Eytukan emerges with Jake and the others. The entire clan is gathered, waiting to hear what has happened. Jake looks up at the Leonopteryx Skull Totem, which seems to stare down at him.

GRACE watches, her eyes brimming. Proud. Relieved. Amazed.

Eytukan places both hands on Jake’s chest and holds them there.

EYTUKAN
(subtitled)
You are now a son of the Omaticaya. You are part of the People.

All the members of the clan press forward, crowding around and putting their hands on Jake’s shoulders, back, chest -- hands upon hands, until he is connected to everyone.
DISSOLVE TO:

EXT. RAINFOREST - NIGHT

JAKE and NEYTIRI run silhouetted in the night. Behind them waterfalls cascade down in the silvery light. POLYPHEMUS RISES behind the trees.

NEYTIRI DIVES from a rock, slicing into a mirror of water. Jake follows her and --

UNDERWATER, they swim over glowing ANEMONES.

They seem to float in a cosmic dance above a luminous garden of waving shapes. Tiny purple fish swirl around them.

Their hands come together, fingers twining, as they float weightlessly, as if between worlds.
DISSOLVE TO:

EXT. WILLOW GLADE

Laughing, they run together into a stand of WILLOWS. Their trunks are as gnarled as bonsai. Long faintly glowing tendrils hang straight down in pastel curtains.

Underfoot, a bed of moss glows faintly. It REACTS to their footsteps with expanding rings of light.

It is an exquisitely beautiful spot.

The willows stir, responding to their presence. She holds up her hands, letting the TENDRILS caress her.



NEYTIRI
This is a place for prayers to be heard. And sometimes answered.

Jake puts out his hands and the tendrils play over his fingers, his palms, his forearms. His eyes go wide. We hear the WHISPERING of ancient Na’vi VOICES.

JAKE
It’s like -- a sound you feel.

NEYTIRI
We call this utraya mokri -- the Tree of Voices. The voices of our ancestors, who live within Eywa.

A few WOODSPRITES circle around them, some alighting on their shoulders and arms.

They stand, very close together now. Her eyes are intense, almost luminous. He feels drawn into them.

But she pulls back a little.

NEYTIRI
You are Omaticaya now. You may make your own bow from the wood of Hometree.
(she looks away)
And you may choose a woman.

The Amazon warrior trying so hard to sound casual. Jake suppresses a smile.

NEYTIRI
We have many fine women. Ninat is the best singer --

JAKE
I don’t want Ninat.

NEYTIRI
There is Beyral -- she is a good hunter -- Jake puts his fingers on her lips to stop her.
JAKE
I’ve already chosen. But this woman must also choose me.

She takes his hands and their fingers intertwine, moving gently over each other.



NEYTIRI
She already has.

He puts his face close to hers. She rubs her cheek against his. He kisses her on the mouth. They explore each other.

Then she pulls back, eyes sparkling.

NEYTIRI
Kissing is very good. But we have something better.

She pulls him down until they are kneeling, facing each other on the faintly glowing moss.

Neytiri takes the end of her queue and raises it. Jake does the same, with trembling anticipation. The tendrils at the ends move with a life of their own, straining to be joined.

MACRO SHOT -- The tendrils INTERTWINE with gentle undulations.

JAKE rocks with the direct contact between his nervous system and hers. The ultimate intimacy.

They come together into a kiss and sink down on the bed of moss, and ripples of light spread out around them.

THE WILLOWS sway, without wind, and the night is alive with pulsing energy as we DISSOLVE TO --

LATER. She is collapsed across his chest. Spent. He strokes her face tenderly.

JAKE
Neytiri, you know my real body is far away, sleeping.

She raises up, placing her fingertips to his chest --

NEYTIRI
This body is real.
(she touches his forehead) This spirit is real.

Her eyes are luminous, honest, infinitely deep.

NEYTIRI
When I was first your teacher, I hated all Sky People. But you have also taught me.
(whispering)
Spirit is all that matters.



She lays her head down, against his chest, listening to his heartbeat.

NEYTIRI
I am with you now, Jake. We are mated for life.



We are?
JAKE


NEYTIRI

Yes. It is our way. (innocently)
Oh. I forgot to tell?

He rouses up, making her look at him.

JAKE
Really, we are?

NEYTIRI
We are.

Jake considers this.

JAKE
It’s cool. I’m there.

He lays his head down, and her arms enfold him, sheltering him as he sleeps.

INT. SHACK - NIGHT

Jake’s eyes open in the darkness. He just lies there, thinking. In his coffin. In another world.
CUT TO:

EXT. WILLOW GLADE - DAWN

DAWN BREAKS in the sacred glade. Shafts of orange morning light. Jake and Neytiri asleep in each others' arms. Maxfield Parrish painting. But then --

THE ROAR OF ENGINES. Neytiri awakens with a start. The SPLINTERING, CRACKLING of forest being crushed under enormous treads gets louder.

SHE WATCHES in growing horror as the BLADE of a bulldozer becomes a dark wall behind the sheltering ring of willows. She shakes Jake, shouting at him in Na’vi to wake up.



NEYTIRI
Jake! Wake up! Where ever you are, come back to me now. Jake!

INT. SHACK - DAWN

HUMAN JAKE is in a hurry to get back to the link. GRACE, still groggy, chases him with coffee and microwaved eggs.

GRACE
Here -- eat this. I’d hate to have to force-feed a cripple.

She slams the lid shut before he can enter and sticks the plate under his nose.

GRACE
(grinning)
She’s not going anywhere.

He sighs heavily and starts wolfing the eggs. EXT. WILLOW GLADE - DAWN
Neytiri SCREAMS as --

The willows begin to fall before the blade, to be ground under the treads. AVATAR JAKE is directly in the path. She tries to lift him, but he is too heavy. She is screaming at him, frantically trying to wake him, as --

INT. SHACK - DAWN

Jake adjusts himself in the link chair. He hands Grace the empty plate.

GRACE
And when was the last time you took a shower? Jesus, Marine.

Jake pushes her hands away and pulls the lid down. EXT. WILLOW GLADE
AVATAR JAKE wakes up to see --

NEYTIRI dragging him, screaming. He leaps up as --

THE DOZER pushes inexorably into the glade, splintering the trees, plowing the earth before it.

JAKE RUNS into the path of the bulldozer, waving his arms.



JAKE
Hey! Heeeey! Stop! Stop!

He positions himself where the camera-eyes of the robotic juggernaut will see him.

INT. OPS CENTER - DAY

CLOSE ON MONITOR -- Jake shouts but there’s no sound feed.

WIDER as the TRACTOR OPERATOR sees him and pulls back on the remote throttles. He yells to his SUPERVISOR.

OPERATOR
Hey, I got one of the natives blockin’ my blade here.

This attracts the attention of Selfridge, who comes over to the workstation.

ON THE SCREEN -- Jake, in his Omaticaya loincloth and ceremonial body paint, is unrecognizable.

SUPERVISOR
(to Selfridge) What do we do?

SELFRIDGE
Roll on. He’ll move. These people have to learn that we don’t stop.

TIGHT ON THROTTLES as the operator pushes them forward.

ON THE SCREEN Jake stumbles back, tripping, disappears below the blade for a second -- reappears, running to the side.

EXT. WILLOW GLADE

JAKE grabs a rock and LEAPS onto the dozer. He climbs quickly to the CAMERA MAST.

SMASH! The rock crashes into the lens of the camera. Jake beats the rock furiously against it, pounding it to junk.

INT. OPS CENTER

CLOSE ON MONITOR -- as Jake’s demonic face is replaced by noise.

OPERATOR
I’m blind.

He pulls back on the throttles.



EXT. WILLOW GLADE

THE JUGGERNAUT grinds to a stop. But the ROAR of engines continues because --

MORE DOZERS and TRACTORS advance nearby, crushing the forest before them. Trees are slashed down by the PLASMA CUTTERS. Terrified animals flee before the onslaught.

POWERSUITS and TROOPERS stride through the ravaged forest, blasting anything that moves. A trooper sees Jake on the dozer. He rips off a BURST and --

Rounds CLANG into metal as Jake dives off the machine. He grabs Neytiri and they run into concealing foliage. From behind a screen of leaves, they watch as --

THE DOZERS advance, obliterating the sacred site, leaving only mud and wood splinters in their path.

CU NEYTIRI, stunned by the nightmarish, unfathomable
wrongness of it. She sobs as the willows die. INT. OPS CENTER
MINUTES LATER, the operator is playing back the CAMERA’S FEED for Quaritch and the others.

QUARITCH
Freeze it, right -- there.

ON MONITOR -- the image expands, until Jake’s face is clear, frozen in an animal snarl.

SELFRIDGE
Son of a bitch!

PUSH IN ON QUARITCH as his jaw clenches in cold fury.

He turns and strides toward the door, shouting to his WATCH COMMANDER as he passes.

QUARITCH
Get me a pilot!
CUT TO:

INT. COMMONS/HOMETREE - DAY

A RAIDING PARTY of hunters, their bodies painted, raise weapons overhead. AVATAR GRACE watches with growing alarm.



EYTUKAN
(subtitled)
Tsu’tey will lead the war party!

Tsu’tey steps forward, face full of hate, raising a war cry among the hunters.

GRACE
(subtitled)
Please -- this will only make it worse --
TSU’TEY
You do not speak here!

JAKE and NEYTIRI cross the commons toward them. Jake feels all eyes turn toward him. He takes her arm, stopping her.

JAKE
(to Neytiri, low)
Okay, listen. There’s something I have to tell you. It’s gonna be hard. I just need you to --

He sees TSU’TEY striding toward them, his face a mask of fury.

TSU’TEY
You!

Tsu’tey walks right up and SLAMS Jake in the chest with both hands. It is so unexpected, that Jake topples on his ass.

TSU’TEY
You mated with this woman?!

GRACE
Oh shit.

Jake stands. He reaches out for Neytiri. She goes to him, clutching his hand.

MO'AT
Is this true?

NEYTIRI
(subtitled)
We are mated before Eywa. It is done.

Tsu’tey turns to Mo'at and Eytukan, his face anguished.



TSU’TEY
(subtitled)
Neytiri was promised to me! Everything is changing. Everything is being destroyed!

Tsu’tey points at Jake, his pain shifting to rage.

TSU’TEY
(subtitled)
These aliens kill everything they touch, like poison.

MO'AT
Neytiri! If you choose this path, you can never be Tsahik. Your life will be wasted.

Neytiri looks at her mother -- sees the grief in her eyes.

NEYTIRI
I have chosen.

Tsu’tey draws his knife and --

TSU’TEY
Yeeeeeaaa!

LUNGES AT JAKE, who’s ready this time -- he sidesteps, blocking the knife, and elbows Tsu’tey HARD in the face.

Tsu’tey reels back, nose bleeding. He starts forward on a second attack but --

Eytukan grabs his arm and spins him around.

EYTUKAN
(subtitled)
Stop! This is not a proper challenge.

Tsu’tey glares at Jake while sheathing his knife.

TSU’TEY
I challenge you.

GRACE
Jake, don’t --

JAKE
I accept.
CUT TO:



INT./EXT. SAMSON - DAY

QUARITCH rides left seat as Trudy pilots through the mountains. She glances at him, then toggles the aircom.

TRUDY
Loveshack this is Samson One Six inbound hot to your pos. I have Colonel Quaritch with me and --

But Quaritch SLAMS the switch, cutting her off.

QUARITCH
Did I tell you to announce us?

TRUDY
Sorry sir, it’s procedure.

INT. SHACK

Norm punches buttons on the comms console.

NORM
Samson One Six? Trudy? (no answer)
Crap.

He looks helplessly at Jake and Grace’s link units -- no way to warn them.

INT. HOMETREE - DAY

TSU’TEY AND JAKE square off. Each holds a long, solid staff. The entire clan crowds around them in a circle.

GRACE
What the hell are you doing?

JAKE
It’s the only way to get him to goddamn listen.

TSU’TEY LEAPS at Jake with a sharp cry and Jake parries with his staff. The staves CLACK off each other as the two combatants LEAP, DUCK and STRIKE furiously.

Tsu’tey sweeps Jake off his feet with a roundhouse hit to the ankles, but --

Jake ROLLS out of it and catches Tsu’tey in the belly with the blunt end.



EXT. SITE 26 - DAY

TRUDY’S SAMSON lands. QUARITCH and a posse of troopers jump down and rush the Shack.

INT. COMMONS

TSU’TEY wades in with a series of short, sharp blows. Jake swings with equal fury. Both fighting from the heart.

The staves whistle through the air, and CLACK together like gunshots. Jake presses hard, and Tsu’tey staggers back, stumbling as --

Jake lands a SOLID HIT, dropping him to his knees, just as -- INT. SHACK
THE INNER DOOR bangs open and QUARITCH stomps toward Grace’s Link controls.

NORM
Hey, hang on, you can’t interrupt a link in progress, it’s dangerous -- wait!

Quaritch shoves him aside and SMACKS his fist down on the POWER switch. Grace’s unit goes dead and --

INT. COMMONS

AVATAR GRACE’S eyes roll back and she keels over. NEYTIRI barely catches her before she hits the ground.

JAKE parries as Tsu’tey swings but then --

Jake's eyes go blank just as -- K-RACK! Tsu’tey puts one alongside his head. Jake sprawls, completely inert. Tsu’tey pokes him with his staff, then raises it and lets out a piercing VICTORY CRY.

INT. SHACK - DAY

JAKE SLAMS OPEN the Link, amped from the fight, furious --

JAKE
Are you out of your goddamn mind?!

QUARITCH
You crossed a line.

Quaritch PUNCHES HIM HARD. Jake flops back, dazed. The troopers yank him out and ZIP-TIE his wrists.



INT. COMMONS

TSU’TEY draws his KNIFE, and bends down, grabbing Jake by the hair.

TSU’TEY
(subtitled)
This is a demon in a false body. It should not live.

He puts his knife to Jake’s throat but --

NEYTIRI BLIND-SIDES him at full tilt. Tsu’tey sprawls, rolls, comes up to see --

Neytiri crouched like a lioness over Jake, her KNIFE and teeth bared, her ears flattened. She SNARLS with primal fury.

Tsu’tey stands panting. He pushes through the crowd and walks away, calling for his hunters.
CUT TO:

INT. OPS CENTER - DUSK

TIGHT ON MONITOR -- showing JAKE’S AVATAR FACE on the dozer camera, as he pounds a rock into the lens. The shot FREEZES on Jake’s ANIMAL SNARL.

WIDER -- HUMAN JAKE sits, bruised and bleeding, watching himself on the monitor. GRACE and NORM stand nearby, rubbing their wrists where the zip-ties bit in. SELFRIDGE and QUARITCH watch with disdain.

QUARITCH
You let me down, son. You got a little local pussy and completely forgot what team you play for.

Jake meets his gaze with a defiant glare.

GRACE
Parker, listen, there may still be time to --

QUARITCH
Shut your fucking hole!

Grace is momentarily stunned by Quaritch’s fury. But she meets it with her own intensity, not backing down an inch.



GRACE
Or what, Ranger Rick? You gonna shoot me?
(to Selfridge)
You need to muzzle your dog!

SELFRIDGE
Can we just take this down a couple notches, please.

JAKE
(to Quaritch)
You say you want to keep your people alive. Start by listening to her.

Jake nods to Grace to continue.

GRACE
(to Selfridge)
This is bad, Parker. Those trees were sacred to the Omaticaya in a way you can’t imagine.

SELFRIDGE
You know what? You throw a stick in the air around here it falls on some sacred fern.

GRACE
I’m not talking about pagan voodoo here -- I’m talking about something real and measurable in the biology of the forest.

SELFRIDGE
(frustrated) Which is what exactly?

Grace’s nerve fails. A rush of conflicting emotions -- the need to act, to do something, colliding with her scientific rigor.

GRACE
(to Jake)
I can’t do this. How am I supposed to reduce years of work to a sound bite for the illiterate?

JAKE
Just tell him what you know in your heart.

She turns to Parker, steeling herself.



GRACE
Alright, look -- I don’t have the answers yet, I’m just now starting to even frame the questions. What we think we know -- is that there’s some kind of electrochemical communication between the roots of the trees. Like the synapses between neurons. Each tree has ten to the fourth connections to the trees around it, and there are ten to the twelfth trees on Pandora --

SELFRIDGE
That’s a lot I’m guessing.
GRACE
That’s more connections than the human brain. You get it? It’s a network -- a global network. And the Na’vi can access it -- they can upload and download data -- memories -- at sites like the one you destroyed.

SELFRIDGE
What the hell have you people been smoking out there? They’re just. Goddamn. Trees.

GRACE
You need to wake up, Parker. The wealth of this world isn’t in the ground -- it’s all around us. The Na’vi know that, and they’re fighting to defend it. If you want to share this world with them, you need to understand them.

QUARITCH
We understand them just fine. Thanks to Jake here.

Jake shares a look of alarm with Grace as Quaritch selects a NEW CLIP on the main monitor --

TIGHT ON MONITOR -- VIDEO-LOG IMAGE of Jake, looking haggard and borderline deranged, rambling in a late-night monologue.

JAKE (RECORDED)
They’re not going to give up their home -- they’re not gonna make a deal. For what? Lite beer and shopping channel? There’s nothing we have that they want. We’re a horror to them. We’re the monsters from space.



JAKE watches with a growing dread as his words condemn the people he has grown to love.

JAKE (RECORDED)
They’re never going to leave Hometree.

Quaritch FREEZES the recording.

QUARITCH
Since a deal can’t be made -- it gets real simple.
(to Jake, icily)
So thanks. I’m getting all emotional. I might just give you a big wet kiss.

GRACE
Parker, we have to talk, like rational people.

SELFRIDGE
Well, I’d cherish that, but unfortunately you’re out of here on the next shuttle.
All of you. I’m shutting down the Avatar Program, effective now.

ON JAKE, GRACE AND NORM, speechless.
SLOW DISSOLVE TO:

A WALL OF FIRE. Silhouettes of direhorse riders cross in SLOW MOTION, spears and bows held high.

INT. OPS CENTER - MORNING

MONITOR SCREEN IMAGE -- WAINFLEET pans a camera across the smoldering hulks of BURNED DOZERS. The toppled remains of a charred ampsuit. Dead troopers bristling with arrows.

WAINFLEET
They hit with banshees first. Set the ampsuit on fire. Driver’s toast.

Quaritch and Selfridge look on grimly.

QUARITCH
The rest of the squad?

WAINFLEET
Six bodies -- that’s all of ‘em. And the equipment is totalled.

SELFRIDGE
Christ.



INT. SELFRIDGE’S OFFICE - DAY

Selfridge is stares soberly as Quaritch outlines the plan.
QUARITCH
I can do it with minimal casualties to the indigenous. We’ll clear them out with gas first. It’ll be humane. More or less.

Selfridge sighs and rubs his face.
QUARITCH
Hey, don’t go limp on me now. This is exactly the incident we needed.

SELFRIDGE
Alright, let’s pull the trigger.
CUT TO:

INT. BIO LAB

MAX and the lab staff are glumly packing files and equipment, under the watchful eye of armed SEC-OPS TROOPERS. JAKE, GRACE, NORM stare bleakly at each other.

GRACE
They bulldozed a sacred site on purpose, to trigger a response. They’re fabricating this war to get what they want.

NORM
I can’t believe that.

JAKE
Yup. That’s how it’s done. When people are sitting on shit you want, you make them your enemy. Then you’re justified in taking it.

TRUDY RUNS into the lab, breathless. She’s wearing full flight gear and carrying her helmet.

TRUDY
Sec-ops is rolling the gunships. They’re gonna hit Hometree!

JAKE
When?

TRUDY
Now. We’re spooling up now! I gotta go.



GRACE
My God.

Jake pumps furiously toward the door, Grace following. INT. OPS CENTER - DAY
SELFRIDGE surveys the airfield, where crews swarm over the gunships, loading ordnance. He turns as JAKE and GRACE charge toward him.

GRACE
Parker, wait. Stop! These are people you’re about to --

SELFRIDGE
They’re fly-bitten savages who live in a tree! Look around -- I don’t know about you but I see a lot of trees. They can move.


GRACE
For God’s sake, there are children in there. Babies!

JAKE
Look Selfridge, you don’t want this kind of blood on your hands. Let me try to talk them out. They trust me.

ON SELFRIDGE, considering this.


INT. LINK ROOM










CUT TO:


SELFRIDGE and an escort of armed TROOPERS accompany Jake and Grace to the links. The two enter their units, as NORM and MAX prep the system.

SELFRIDGE
You’ve got one hour. Unless you want your girlfriend in there when the axe comes down, you get them to evacuate. One hour.

Jake lowers the upper clamshell. Norm starts the sequence.
CUT TO:

INT. COMMONS -DAY

The entire clan is gathered, with Eytukan and Mo'at presiding. Jake looks around, feeling the gaze of the People upon him. He steels himself, and speaks in clear Na’vi --



JAKE
(subtitled)
Eytukan, I have something to say, to everyone.

EYTUKAN
(subtitled)
Speak, Jakesully.

JAKE
(subtitled)
A great evil is upon us. The Sky People are coming to destroy Hometree. They will be here soon.

A murmur of fear and anger goes through the crowd.

JAKE
(subtitled)
You have to leave, or you will die.

MO'AT
Are you certain of this?

JAKE
They sent me here to learn your ways. So one day I could bring this message, and you would believe it.

NEYTIRI
What are you saying, Jake? You knew this would happen?

He is unable to meet her eyes.

JAKE
Yes.
(anguished)
At first it was just orders. Then everything changed. I fell in love-- with the forest, with the Omaticaya People --
(he looks at her)
-- with you. And by then, how could I tell you?

Neytiri can barely breathe. She is shaking with the enormity of it, her voice cracking with rage and pain --

NEYTIRI
I trusted you, Jake!



JAKE
Neytiri. Please, I only wanted to --

NEYTIRI
You will never be one of the People! NEVER!

TSU’TEY yells to his HUNTERS --

TSUTEY
(subtitled)
Bind them.

They grab Jake, who doesn’t resist. Others seize Grace. Both are driven to their knees, and their arms bound.
CUT TO:

EXT. RAINFOREST - DAY

SCORPION GUNSHIPS darken the sky as they come over the tops of the trees. At the head of the formation is one much larger ship, a monster 150 feet long -- the GENERAL DYNAMICS C-21 DRAGON GUNSHIP.
Quaritch, next to the pilot of the Dragon, surveys the world below like Napoleon astride his horse.

EXT. HOMETREE

JAKE and GRACE are lashed to posts at the front entrance to Hometree. The People look up as --

THE DRAGON and its escort of GUNSHIPS arrive over the trees. The DOWN-BLAST from their rotors creates a maelstrom of flying leaves and debris.

IN THE DRAGON COCKPIT Quaritch watches a targeting screen -- a telescopic image of Jake and Grace tied to posts.

QUARITCH
Well, I’d say diplomacy has failed.

TSU’TEY and another HUNTER hold knives to the throats of the two avatars, glaring defiantly at the gunships.

QUARITCH
I think they mean to cut their throats if we don’t back off. Make sure you get a nice close-up of that. I can tack it onto the after-action report.

JAKE YELLS to Neytiri, Tsu’tey, the others gathered nearby --



JAKE
You have to get out of Hometree! Run to the forest! Please, I’m begging you!

EYTUKAN scowls at Jake, then GRABS TSU’TEY and yells --

EYTUKAN
(subtitled)
Take the ikran! Attack from above!

Tsu’tey grabs some hunters and runs up the roots of Hometree. IN THE COCKPIT Quaritch grows impatient.
QUARITCH
Alright, let’s get this done. Give me forty millimeter gas rounds, right in the front door.

GUNNER
Roger. CS forties. Going hot.

QUARITCH
Fire.

On the Dragon’s stub-wings the 40mm ROCKET LAUNCHERS open up with a BARRAGE of leaping fire which FLASHES down and --

K-WHOOM!K-WHOOM!K-WHOOM! -- the inside of Hometree ERUPTS with multiple EXPLOSIONS of TEARGAS.

THE GAS rolls across the confused villagers. They begin to cough and gag.

Eytukan and the remaining HUNTERS bravely fire at the gunships with their longbows.

IN THE DRAGON’S COCKPIT, Quaritch laughs as arrows CLINK against the armored windows.

AMID CLOUDS of teargas, the Omaticaya run, stumble, collapse.

EYTUKAN
(yelling/subtitled)
Everybody outside! Go to the Forest.

The villagers pour out of Hometree. Everyone is yelling. Piercing SCREAMS in the boiling gas.

JAKE, eyes streaming, struggles with his bindings.

KA-WHOOM! An INCENDIARY ROUND explodes inside the Commons. FLAMES ROAR through the base of Hometree.



INSIDE HOMETREE it is a burning smoky HELL. Flames roar up the inside like a chimney. STRAGGLERS scramble outside, coughing and dragging wounded with them.

High up in the trunk, TSU’TEY and his hunters leap rapidly from spoke to spoke, climbing barely ahead of the fireball.

OUTSIDE the fire is driven by the rotor-wash toward JAKE and GRACE who are still bound tightly to the posts.

Out of the smoke, MO’AT appears in front of Jake. She raises a KNIFE and --

SLASHES DOWNWARD. Jake looks down, surprised, to see his bonds falling away. He meets her eyes, which are filled with horror, but also something else. Call it faith.

MO’AT
You are one of us. Help us!

Jake takes the knife and cuts Grace free.

JAKE
We’ve gotta move! He’s gonna blow the columns.

As Grace realizes what he means, he grabs her and they RUN. Around them the Omaticaya flee in horror and confusion.

IN THE COCKPIT, Quaritch watches as the Omaticaya stream away from the Great Tree, running along roots and branches.

QUARITCH
That’s how you scatter the roaches. Okay, switch missiles. Give me H-E’s at the base of the west columns.

PILOTS (V.O.)
Copy, switching missiles.

IN TRUDY’S SAMSON -- she hears the other pilots acknowledging Quaritch’s order.

TRUDY
Screw it.

She takes her finger OFF the fire-control and pulls her aircraft out of formation.

PUSHING IN ON QUARITCH, the Hometree reflecting in his glasses.



QUARITCH
Bring it down.

MISSILES stream down from the DRAGON and the other gunships and --

The base of Hometree VANISHES in a chain of HIGH-EXPLOSIVE BLASTS. The massive PILLARS fragment into matchsticks, and --

The Omaticaya watch in horror as -- HOMETREE GROANS and starts to MOVE.
In a cacophony of cracking, splintering roots, the mighty tree TOPPLES with agonizing slowness.

AT THE BANSHEE EYRIE, TSU’TEY and the other hunters spur their mounts into flight. They swoop among the branches as the tree, the one fixed thing in their lives, MOVES.

It CRASHES DOWN through the forest canopy, crushing the lesser trees in its path, FALLING PONDEROUSLY.

HOMETREE hits the ground like the end of the world, raising a great cloud of dust and pulverized debris.

IN THE DRAGON cockpit, Quaritch surveys the destruction.

QUARITCH
Nice work people. Alright, let’s light it up.

INCENDIARIES launch from the gunships, EXPLODING into gouts of FIRE in the debris of Hometree.

THE GUNSHIPS fan the flames through the trees like a fire- storm. The Omaticaya retreat as a WALL OF FIRE advances.

JAKE SEARCHES for Neytiri amid swirling smoke and sparks.

JAKE
Neytiri! Neytiri!

GRACE is gathering crying CHILDREN, and herding them away from the fire-storm.

NEYTIRI stumbles through the burning wreckage at the edge of the INFERNO. She sees --

EYTUKAN. A large shard of wood is driven through him like a spear. He recognizes her as she kneels over him.



EYTUKAN
(subtitled)
Daughter -- take my bow. Protect the People.

In his last living moment he places his bow in her hands. She collapses over him, her face crumpling in grief.
JAKE reels out of the smoke. Kneels next to her.

JAKE
I’m sorry --

She shoves him away and stands, screaming at him as tears stream down her face.

NEYTIRI
Get away from me, Jake. Go away! Never come back!

Jake stumbles back as she slumps down by her father’s body. Sparks and smoke swirl around him. He watches as --

NETYIRI kneels, grieving. Slumped over, clutching her stomach. Keening like an animal.

SLOW MOTION -- Jake staggers lost and alone through the burning forest. Utterly shattered. Eyes vacant.

JAKE (V.O.)
I was a warrior who dreamed he could bring peace. Sooner or later though, you always have to wake up...

INT. LINK ROOM

SELFRIDGE watches a video feed of the destruction on one of the monitors. Max and NORM stare in shock.

SELFRIDGE
Pull the plug.

A TROOPER crosses to the console and grabs the handle of the MASTER BREAKER --

EXT. RAINFOREST

The strings are cut. Jake flops to the ground, limp.

Elsewhere in the smoky Hell, Grace slumps unconscious. The crying kids pull at her. Mo’at, leading a group of Omaticaya, comes upon the scene.



She grabs the kids and pulls them away, leaving Grace’s avatar helpless in the path of the flames. She hesitates, then --

MO’AT
(subtitled) Bring her.

INT. LINK ROOM

BLACKNESS. Then the top clamshell of Jake’s unit is yanked upward, and troopers grab him, zip-tie his wrists as we --
CUT TO:

EXT. RAINFOREST - DUSK

ON A HILLSIDE -- a grieving Neytiri stands with Mo'at and the Omaticaya refugees. Two hunters pull Grace’s avatar on a travois.

They watch as the flames burn like a funeral pyre below. A great pall of smoke darkens the landscape.
DISSOLVE TO:

INT. LOCK-UP - NIGHT

Jake, Grace, and Norm are in a common holding cell. They sit, staring in silence. Too wired to sleep, too emotionally drained to move.

GRACE
They never wanted us to succeed.

AT THE DESK OUTSIDE, the lone TROOPER looks up as --

TRUDY approaches along the corridor, pushing a stainless steel trolley.

TRUDY
Personally I think steak’s too good for these traitors.

GUARD
They get steak? That’s bullshit. Let me see that --

The guard bends to look into the hot cart and -- THE MUZZLE of Trudy’s pistol presses behind his ear.



TRUDY
Oops.
(shoving him down) All the way down, pendejo.

She WHISTLES and MAX trots around the corner.

Trudy binds the guard with one of his own zip-ties as Max grabs his KEY CARD and runs to the cell. Swipes the card. The door is rolling open when --

ANOTHER TROOPER rounds the corner. Trudy takes him down with a sharp BLOW to the windpipe and a THAI KNEE to the ribs.

Meanwhile the first TROOPER is getting up, but Max CLOCKS him heartily with a coffee urn. He goes down and stays down.

MAX
That was unexpectedly satisfying.
Trudy plants a kiss on Norm as he runs out of the cell.

NORM
Baby, you rock.

Jake wheels out, grabbing the sidearm from the fallen trooper as Trudy binds his wrists.

JAKE
(to Max and Trudy) Thanks.

Jake faces his motley group, chambering a round.
JAKE
So what do you say? Time for a revolution?

GRACE
I’m free.

Trudy grins and taps his fist.

JAKE

Come on.


INT. UTILIDOR

CUT TO:


In the utility corridor under the base, Jake pumps the chair furiously, as the others jog. They reach an AIRLOCK and start donning EXOPACKS.



JAKE
(to Trudy)
Get your ship fired up.

Trudy nods. She grabs Norm and enters the airlock. Jake turns to Max.


JAKE
Stay here. I need somebody on the inside I can trust.

Max nods. Jake grips his hand tightly.


EXT. AIRFIELD - NIGHT

IN THE SAMSON, Norm is helping Trudy race through the





CUT TO:

preflight checks as the turbines spool up. A LIGHT hits them.

An armored TROOPER approaches, aiming his AR at them.

TROOPER
I need you to shut down and step out of the vehicle! Now!

JAKE rolls up behind him, aiming his pistol.

JAKE
Take it nice and easy, troop.

The trooper turns, sees the gun.

JAKE
On the ground, face down. Hands behind your head.

The trooper hesitates.

GRACE
Do what he goddamn says!

He does. Norm jumps down and grabs the trooper’s rifle and side-arm, covering him, while Grace helps Jake from chair to the back bay of the chopper. She throws his chair in, and jumps in herself.

JAKE
Go! Go! Go!



INT. OPS CENTER - NIGHT

QUARITCH, watching a monitor, sees what’s happening down at the airfield. He slams his palm down on an ALARM BUTTON.

He draws his PISTOL. Strides toward the EMERGENCY DOOR. He undogs it.

EXT. OPS CENTER/AIRFIELD - NIGHT

HOLDING HIS BREATH Quaritch yanks the hatch open and strides onto the outer landing. Inside people scramble for MASKS.

THE SAMSON lifts off in a blast of rotor-wash just as -- QUARITCH OPENS FIRE and --
ROUNDS rake the ship. Trudy banks hard, using the bottom to shield them. Bullets WHACK into the ship as she climbs-out over the tree-line.

Jake’s fist pumps the air exultantly.

JAKE
Oh yeah, baby!

GRACE
Aaahh, crap. Not again.

He looks over at Grace and freezes. She is looking down at a BLOODY HAND. She clutches her abdomen, covering the spreading stain. Looks at Jake, wide-eyed.

GRACE
This is gonna ruin my whole day.

JAKE
Hang on, Grace.
CUT TO:

EXT. SHACK / SITE 26 - NIGHT

NORM’S AVATAR, with an AR slung over his shoulder, stands on the roof of the LINK MODULE. He gives a thumbs up signal.
The lift cable goes taut and -- The shack LIFTS OFF THE GROUND.
Trudy’s Samson beats the grass of the mountain meadow, straining to lift the module on a long-line sling. The shack sways as Trudy banks across forested slopes and heads deeper into the HALLELUJAH MOUNTAINS.



INT. SAMSON CABIN - NIGHT

Outside the windows, clouds and cliffs pass by, lit by Polyphemus.

Jake is yanking stuff out of the Samson’s trauma bag, while Grace lies curled across two back seats, hugging her blood- soaked abdomen. She is pale and shocky.

Trudy is flying on visual only, by the light of Polyphemus. Her instruments are showing gibberish.

TRUDY
Well, at least they won’t be able to track us up here. Not this deep in the vortex.

JAKE
It’s strongest at the Well of Souls, right?



Yeah.
TRUDY

JAKE

Good, ‘cause that’s where we’re going.

TRUDY
Copy.

He gives Grace an ampule of morphine for the pain.

JAKE
I’m gonna get you some help, Grace.

GRACE
Forget it, it doesn’t matter.

Jake grabs her shoulders.

JAKE
No! The People can help you. I know it.
CUT TO:

EXT. WELL OF SOULS - AERIAL - DAWN

Dawn light paints the massive ARCHES of magnetic rock above the Well of Souls.

Tiny as an insect, the SAMSON passes.



JAKE (V.O.)
The Well of Souls. The heart of the forest. I knew the People would go there.

EXT. WELL OF SOULS - DAWN

The WELL OF SOULS is a deep caldera 100 meters across. It is ringed with enormous WILLOWS whose roots seem to pour down the sheer rock walls like candle wax.

AT THE BOTTOM, in a natural amphitheater, the Omaticaya refugees are clustered around a central rock outcropping which forms a kind of dais and altar.

Shafts of dawn light reach to the bottom of the grotto, lighting a single willow -- the MOTHER TREE. Ancient and gnarled, it grows in the center of the rock.

Its ROOTS spread down to the grotto floor, where they merge with the roots of the willows ringing the Well -- forming a braided mat resembling the surface of a brain.

Mo'at stands on the dais, leading them in a CHANT.
MO’AT
(subtitled)
Wise ancestors who live within Eywa, guide us. Give us a sign.
CUT TO:

EXT. FOREST CLEARING - DAWN

The shack descends from the sky like a gift from the gods. It bumps to the ground.
CUT TO:

INT. SHACK -- DAY

Grace lies, comatose, in her open link. Trudy gives Jake a look that says “not much time.” Jake feels Grace’s cold forehead, then crosses to his own link.

As Trudy helps him in, Norm rapidly preps the system.
NORM
(low)
Tsu’tey is Olo’eyctan now. He’s not going to let you get near that place.

JAKE
I’ve gotta try, Norm.




Jake pulls the clamshell down and we --


EXT. RUINS OF HOMETREE - DAY

CUT TO:


CU JAKE’S AVATAR -- HIS EYES OPEN. He sits up. The forest is silent, shrouded in smoke that the sun can’t penetrate. The animals have fled. Ash blows on the wind.

JAKE (V.O.)
Outcast. Betrayer. Alien. To ever face them again, I was gonna have to change the rules.

DISSOLVE -- JAKE reaches the top of a rise. The forest beyond is utterly DEVASTATED. The trees burned and fallen. Small fires still flicker across a landscape in Hell.

JAKE stares. It is his vision, made real. He stumbles through the dark wasteland, sparks and ash swirling around him.

A SCREECH. Jake looks up as --

HIS BANSHEE -- bonded for life -- flaps down to a landing in front of him. He steps to it, and strokes its head. It nudges his chest like a horse.

JAKE (V.O.)
Sometimes your whole life boils down to one insane move.

JAKE
Come on, boy. Time to fly.

OMIITED
EXT. MOUNTAINS - DAY

THE GREAT LEONOPTERYX glides effortlessly along the ridge where Jake and Neytiri first encountered him.

It scans for prey below, its magnificent indigo-crested head cocking left, then right.

JAKE (V.O.)
The way I had it figured, Toruk is the baddest cat in the sky. Nothing attacks him. So why would he ever look up?

FROM ABOVE -- THE SMALL SHADOW of Jake’s banshee falls across the back of the mighty Toruk.



JAKE (V.O.)
But that was just a theory.

JAKE DIVES and WE RUSH DOWN toward the great beast and our own shadow then --
CUT TO:

EXT. WELL OF SOULS - LATE AFTERNOON

The Omaticaya people lift their voices in a SONG filled with tragic loss and yearning for deliverance.

CLOSE ON NEYTIRI, singing. A SHADOW CROSSES HER FACE. She
looks up, and her eyes go wide as --

A TERRIBLE CRY echoes, turning all eyes skyward. AN ENORMOUS SHADOW covers the crowd as --

TORUK comes out of the sun, beating its huge wings to slow its descent. Its crimson and black wings, backlit by the sun, seem to glow from within.

The People CRY OUT in alarm and scatter as the dreaded beast alights in their midst. And that’s when they see --

JAKE, riding high on its shoulders, plugged-in to its antenna. It folds its wings and stands calmly amid the paralyzed Na’vi.

Toruk lowers its body. They stare in awe as Jake dismounts and strokes the magnificent animal’s flank.

NEYTIRI, TSU’TEY and MO’AT watch in stunned amazement as the legendary Rider of Last Shadow walks toward them.

NEYTIRI
(breathing the words)
Toruk Macto.

Neytiri raises her arms.

NEYTIRI
(shouting)
Toruk Macto!

ON THE FACES of the Omaticaya -- new hope dawning in their eyes. WHISPERS flow among them, the words REPEATED --

CROWD
Toruk Macto... Toruk Macto...



Jake walks through the crowd, straight to Neytiri at the foot of the dais. He looks into her enormous eyes, and the emotion between them is powerful and pure.

NEYTIRI
I See you.

JAKE
(a hoarse whisper) I See you.

Neytiri’s eyes brim with tears.

NEYTIRI
I was afraid Jake -- for my people. I’m not any more.

Jake takes Neytiri’s hand and climbs the steps of the dais.

MO’AT steps back in awe as he approaches. He turns to Tsu’tey, who stares at him with fear and incomprehension. Jake plays to the rapt crowd as he says --

JAKE
(subtitled)
Tsu’tey of the Rongloa, son of Ateyo. I stand before you, ready to serve the People.
(then just for Tsu’tey)
You are Olo’eyctan, and you are the best warrior. I can’t do this without you.
Tsu’tey struggles with his emotions. Finally -- TSU’TEY
I will fly with you.

JAKE
Ireiyo.

JAKE turns to the MATRIARCH.

JAKE
Grace is dying. I beg the help of the Great Mother.

MO'AT
Bring her, Jakesully.

TIME CUT -- AVATAR JAKE carries Grace’s HUMAN BODY, lightly in his arms like a child. Jake walks through the crowd to the dais, followed by NORM, who carries GRACE’S AVATAR.



JAKE
Look where we are, Grace.

Her eyes flutter open. She looks up wonderingly at the Mother Tree.

GRACE
(with a wan smile)
I need to take some samples.

Mo'at directs them to lay both bodies among the roots on the altar-rock.

Mo’at touches Jake’s shoulder and he steps back.

MO’AT
(quietly)
The Great Mother may choose to save all that she is --

Mo’at’s hand indicates Grace’s AVATAR --

MO’AT
-- in this body.

CU JAKE, realizing the enormity of what she’s saying.

JAKE
Is that possible?

MO’AT
Possible, yes. She must pass through the Eye of Eywa -- and return. But Jakesully-- she is very weak.

Jake kneels next to Grace, taking her tiny human hand in his avatar hand.

JAKE
Hang on, they’re gonna fix you up.

Grace is barely conscious. She grips his hand.

GRACE
I -- always held back. But you gave them your heart. I’m proud of you, Jake.

Jake feels his throat close with emotion.

Grace’s eyes blaze with intensity though her voice is faint.



GRACE
Help them. You do whatever it takes. You hear me?

JAKE
I will.

TIME CUT -- MO’AT stands in a kind of trance amongst the tendrils of the Mother Tree.

NEYTIRI and the other acolytes dance hypnotically. All the Omaticaya sway and chant to the rhythm of the drums.

MACRO SHOT -- fine, hairlike THREADS have emerged from the roots and are gently spreading over Grace’s HUMAN skin.

JAKE, still holding her hand, watches her body being fused to the root-floor by a thousand connections.

GRACE’S AVATAR is gently connected by the same questing ROOT- CILIA-- they entwine with the QUEUE and spread over the body.

The grotto is dark except for the spectral GLOW of the willows. The CHANT continues, hypnotically. MO’AT, on her knees beneath the Mother Tree, writhes her arms in the trance state. Her eyes are rolled back, showing only WHITE.

GRACE GASPS and her eyes SNAP OPEN. Her expression is AMAZED, as if seeing something so beautiful it can never be explained.

ON HER HAND -- GRIPPING Jake’s convulsively, as she tries to anchor herself to this world for a few more seconds --

GRACE
I’m with her Jake -- (an amazed whisper)
-- she’s real --

Grace SHUDDERS, as pain shoots through her. BLOOD seeps through the silken white root-cilia growing across her abdomen. Drowning WHITE in shocking CRIMSON.

She exhales a last shuddering breath -- and goes STILL.

JAKE
Grace!

He sees the roots falling away from her human body.

JAKE TURNS hopefully toward her AVATAR -- but the roots are falling away from it as well. It sleeps -- VACANT.



MO’AT stops the chant. She crosses to Jake and kneels with him, touching his shoulder.

MO’AT
Her wounds were too great, there was not enough time. She is with Eywa now.

NEYTIRI removes Grace’s mask and gently closes her eyes. Jake stands slowly, barely holding it together.
NEYTIRI comes to him and he sees the despair and hope conflicting on her face --

-- and he raises his head. TURNS to face TSU’TEY and the CROWD.

JAKE
With your permission, I will Speak now. You would honor me by translating.

Tsu’tey gestures assent, and they face the clan together.

JAKE SPEAKS, the pain of Grace’s death in the passion and fury of his voice. Tsu’tey TRANSLATES beside him.

JAKE
The Sky People have sent a message that they can take whatever they want, and no one can stop them. But we will send them a message. Ride out, as fast as the wind can carry you, tell the other clans to come. Tell them Toruk Macto calls to them. Fly now with me brothers and sisters! Fly! And we will show the Sky People that this is our land!

TSU’TEY finishes with a bloodcurdling war-cry, and the entire CLAN responds, their shouts echoing across the forest.

JAKE takes Neytiri’s hand and runs to the leonopteryx. He vaults onto its back and pulls her up behind him.

THE HUNTERS run to their banshees, mounting quickly. Jake’s leonopteryx rises on mighty wings into the night sky. With a thunder of wings, the banshees take off after it.

LONG LENS -- POLYPHEMUS. Across its face, the banshees rise like a swarm of bats. Groups of riders peel off in different directions.
CUT TO:



EXT. CLAN GATHERING - NIGHT

JAKE and NEYTIRI stand before the gathered members of ANOTHER CLAN. Jake speaks as she translates. We don’t hear the words.

TRACK ACROSS the faces of the clan, a sea of eyes in flickering fire-light.

JAKE (V.O.)
We rode out to the four winds. To the horse clans of the plain, to the ikran people of the mountains. When Toruk Macto called them, they came.

VARIOUS ANGLES -- SLOW MOTION as riders vault onto their armored direhorses. Banshee riders raise spears and bows, spurring their mounts to leap skyward.
CUT TO:

EXT. WELL OF SOULS - DAWN

With a WHOOSH and the crack of mighty wings, JAKE RETURNS. Jake and Neytiri alight from his legendary mount.

Around them HUNDREDS OF BANSHEES are landing. A gathering of eagles.

FROM ABOVE we can see hundreds of Na’vi streaming down into the Well of Souls and many hundreds more camped in the forest above it.

DIREHORSE RIDERS are arriving along many trails.

BANSHEE RIDERS circle and swoop, darkening the sky above the grotto.

JAKE, standing next to the Leonopteryx, watches his army gathering.
CUT TO:

INT. COMMISSARY - DAY

It’s standing room only as all base personnel are crowded into the dining hall. A portable 3D GRAPHICS PROJECTOR has been set up, and the lights are down. QUARITCH stands in front of the display image -- a classic pre-mission briefing.

QUARITCH
People, you are fighting for survival. There’s an aboriginal horde out there massing for an attack. First slide.



The display shows an overhead image of the Well of Souls. It looks like Woodstock in the jungle.

QUARITCH
These orbital images show the hostiles’ numbers have gone from a couple of hundred to over two thousand in one day, and more are pouring in. By next week it could be twenty thousand. Then they’ll be overrunning our perimeter here. We can’t wait. Our only security lies in pre- emptive attack. We will fight terror with terror.

TRACKING ACROSS the grim faces of the miners and troopers. Fear transforming to hatred in their eyes.

QUARITCH
Next slide. This mountain stronghold is supposedly protected by their deity.
When we destroy it, we will blast a crater in their racial memory so deep they won’t come within a thousand klicks of this place.
CUT TO:

INT. ARMOR BAY - DAY

TROOPERS issue automatic weapons and magazines to a long line of mine workers. The miners lock and load like the red- blooded redneck NRA supporters they are.

BLASTING TECHS are setting radio-detonated primer charges into two-ton stacks of EXPLOSIVE COMPOUND. The stacks are band-strapped together on pallets.

TRACKING WITH SELFRIDGE, staring around him in growing dismay as he walks through the full-scale mobilization.

He approaches Quaritch, who is barking orders amid a hive of activity around the ampsuits.

SELFRIDGE
This thing is completely out of control!

Quaritch ignores him, turning away to focus on ordnance loading.

SELFRIDGE
Listen to me! I am not authorizing you to turn the mine-workers local into a freakin’ militia!



QUARITCH
I declared threat condition red. That puts all on-world assets under my command.

SELFRIDGE
You think you can pull this palace coup shit on me?! I can have your ass with one call --

Quaritch grabs him and PINS him against the side of an ampsuit.

QUARITCH
You’re a long way from Earth.

Selfridge is paralyzed. Physical force -- against him?
Quaritch releases him and walks away.

QUARITCH
(to his men) Get him out of here.

Several troopers converge on Selfridge.

SELFRIDGE
You touch me you’re so fired.

He pushes through them and they escort him toward the door.
CUT TO:

INT. SHACK - DAY

HUMAN JAKE, NORM and TRUDY are gathered around the comms monitor, talking to MAX.

MAX
I don’t know how secure this channel is.

JAKE
Talk fast.

MAX
It’s crazy here, Jake. It’s full mobilization. They’re rigging the shuttles as bombers. They’ve made up these big pallets of mine explosives. It’s for some kind of shock and awe campaign.

TRUDY
Frickin’ daisycutters.





Holy shit.
NORM


JAKE

(to Max)
Can you talk to Selfridge? Maybe we can cut some kinda deal before this thing goes all the way.

MAX
No, Quaritch has taken over. He’s rolling and there’s no stopping him.

JAKE
When?

MAX
Oh six hundred tomorrow.

Jake takes that in.



Thanks.

Max signs off.
JAKE




NORM

We’re screwed.

TRUDY
You know he’s gonna commit those bombers straight to the Well of Souls.

JAKE
That’s right. Because I gave it to him on a plate.

TRUDY
We both did.

NORM
If he takes out the Well of Souls -- it’s over. It’s their main line to Eywa, to their ancestors -- it’ll destroy them.

JAKE
Then I guess we better stop him.

Jake looks like he’s about to collapse. He’s gaunt, eyes deeply shadowed, hands  shaking.

TRUDY
You need to get some rack.



He grabs a packet of freeze-dried crystals and pours them directly into his mouth, chewing them up.

JAKE
Gonna have to settle for coffee.
CUT TO:

EXT. BATTLE CAMP - DUSK

TRACKING through the warrior camp above the Well of Souls. Hundreds of hunters from many clans prepare their weapons.

Hunters paint the wings of their banshees like war ponies. DIREHORSES are painted and ornamented with totemic streamers.

The Na’vi paint and pierce themselves. Dance. Bathe in the smoke of cleansing herbs -- RITUAL PURIFICATION. HUGE DRUMS are beaten. A dark primeval energy. They are psyching themselves up for battle.

JAKE (V.O.)
I was a warrior who dreamed he could bring peace. But there was only one thing I was ever really good at. Ooh-rah.

TIME CUT -- Jake, Neytiri a group of banshee riders squat around an animal skin on which he has drawn the silhouette of a Scorpion gunship -- like a hunt totem.

JAKE
(Na’vi/subtitled) Strike here and here.

Jake splats red dye at the centers of the circles symbolizing the rotors. The Na’vi absorb the lesson eagerly, like kids.

He sees TRUDY approaching and breaks off. Neytiri stays with the hunters, talking about what they’ve learned.

TRUDY
(low)
You know our chances suck.

JAKE
Yeah.

TRUDY
Going up against gunships with bows and arrows...

JAKE
What’s your point?




TRUDY
(nodding) Right.

She taps his fist and walks away toward her SAMSON.


EXT. WELL OF SOULS - NIGHT

The cook-fires of the battle camp FLICKER like a





CUT TO:

constellation around the edge of the Well of Souls as -- JAKE slips down into the darkened, empty amphitheater.
He moves to the MOTHER TREE -- gnarled, ancient, MAJESTIC. The roots spread in all directions, like the center of the world.

Jake steps forward. The willow-like tendrils SWAY toward him, moving in a breeze that isn’t there.

JAKE
I’ve never done this in my life.

He squats at the base of the tree.

JAKE
And I’m probably just talking to a tree right now. But if you’re there -- I need to give you a heads up.

He looks up into the tree. The hanging tendrils undulate softly. It’s easy to imagine a presence.

JAKE
If Grace is there with you -- look in her memories -- she can show you the world we come from. There’s no green there. They killed their Mother, and they’re gonna do the same thing here.

FROM UP IN THE TREE, looking down. WOODSPRITES float in silence, moving around aimlessly.

JAKE
More Sky People are gonna come. They’re gonna come like a rain that never ends --

Neytiri approaches silently behind him, listening.

JAKE
-- until they’ve covered the world. Unless we stop them.
(MORE)

JAKE (cont'd)
Look, you chose me for somethin’. And I’ll stand and fight, you know I will. But I could use a little help here.

Jake senses Neytiri and turns.

NEYTIRI
Our Great Mother does not take sides. She protects only the balance of life.

She comes to him, intertwining her long fingers with his.

JAKE
It was worth a try.

They lean in, foreheads touching, bodies pressed together. Holding each other -- in this, the last moment of peace.
CUT TO:

TIGHT ON a turbine as it starts to turn. Its RISING WHINE carries over --

A SERIES OF RHYTHMIC CUTS:

MAGAZINES are slammed into automatic weapons. AMMO BELTS are fed into rotary cannons. MISSILES are attached to gunship stub-wings.

TIGHT ON BLUE HANDS sharpening wooden arrows. Stringing bows. Cinching direhorse harnesses.

TROOPERS DROP into ampsuit cockpits. PILOTS close gunship canopies. TROOPERS run up shuttle ramps.

LONG LENS STACK, tight and abstract on gunships as they rise in a swarm amid boiling turbine exhaust and blasting rotor wash.

EXT. RAINFOREST/ AERIAL - DAWN

WIDE SHOT -- TILTROTORS fill the sky. Deadly armored beetles.

The DRAGON leads the formation, flanked by SCORPIONS. Behind that is a wave of SAMSONS, and last, the two enormous VALKYRIE shuttles, packed with troops and ampsuits.

INSIDE THE DRAGON, Quaritch surveys his armada as they skim over the tree tops.

THEY SWEEP toward the Hallelujah mountains in a thundering wave.



EXT. MOUNTAINS/ AERIAL - DAWN

SQUADRONS OF BANSHEES darken the sky in waves, led by a single GREAT LEONOPTERYX. Jake sits astride his mount, flanked by Neytiri and Tsu’tey on their banshees.

EXT. MOUNTAINS - DAWN

THE DRAGON DESCENDS on final approach to a large clearing -- the LZ. The Samsons flair and touch down, disgorging troops, while the gunships hover protectively.

THE VALKYRIES blast the ground with their powerful lift jets. They land. The ramps drop. Troopers pour out, weapons leveled, advancing in a cordon.

UP ANGLE as AMPSUITS descend from the Dragon on cables. Their massive feet smash down, and they march forward, leading the army into the forest.

LYLE WAINFLEET, walking point in his hydraulic suit, scans his cockpit screens. He sees movement on the FLIR display -- ghostly THERMAL SIGNATURES.

WAINFLEET
Contact. Two hundred meters.

A chilling SOUND echoes through the forest -- the ululating WAR CRIES of untold Na’vi. The troopers, look around, spooked. They can’t tell where the sound is coming from.

Then they feel it -- the GROUND ITSELF SHAKING. They grip their weapons, bracing themselves as --

THREE HUNDRED NA’VI HORSEMEN charge through the forest at a full gallop, their hooves POUNDING the earth. It is an awesome sight.

NORM SPELLMAN rides with the Na’vi hunters, carrying an assault rifle.

THE NA’VI CHARGE thunders toward the human line. The hunters raise their bows as --

THE AMPSUITS raise their GAU-90’s.

ON THE THERMAL IMAGERS target-cursors track the ghost riders.

QUARITCH
Fire for effect.

The entire line of troopers opens fire. TRACERS riddle the jungle, blasting foliage into confetti.



CHARGING DIREHORSES crash down, flipping over. Riders are flung off. The withering fire continues, and the ranks are decimated as --

RIDERS LAUNCH their arrows at a full gallop. A few hit their marks among the troopers. NORM FIRES his AR on full auto.

TWO CHARGING DIREHORSES have a heavy log slung between them like a battering ram. At a full gallop they hit an ampsuit, FLIPPING IT onto its back with a blown-out canopy. Victory is short lived as the two riders are cut down.

NORM’S HORSE is hit by tracer fire. He is flung off as the creature cartwheels. He hits hard, scrambling for cover as --

A WARRIOR HURLS his spear a moment before his horse is cut down. It SLAMS through an ampsuit’s canopy but --

THE MERCILESS FIRE continues. Horses rear and collapse. Riders pivot their mounts to flee and --

THE THERMAL SCREENS show the remaining ghost riders scattering.

LYLE signals and the line advances, firing sporadically at moving targets.

OVERHEAD, NA’VI HUNTERS stream through the trees, running along the branches.

As the troopers advance into bow range, the NA’VI open fire and --

TROOPERS SPROUT ARROWS in throat, legs, masks -- the targets Jake taught them, but --

THE FIRING LINE aims upward, tracking the THERMAL TARGETS. TRACERS rip through the foliage and --

NA’VI FALL while others retreat as bark and wood is blasted off the limbs beneath their feet.

NORM sprints frantically through the woods, shouting into his HANDSET --

NORM
Jake! Jake! We’re falling back!

SURVIVING NA’VI flee the horrific onslaught. It is a total rout.

IN THE DRAGON, Quaritch catches glimpses of the figures streaming through the forest below.



QUARITCH
Blue team, switch forties. Fire at will.

Led by the Dragon, the gunships FIRE streamers of 40mm ROCKETS ahead of them. The jungle EXPLODES with HE bursts. Circular SHOCK WAVES flash outward through the jungle --

STROBOSCOPIC GLIMPSES of terrified horses rearing, Na’vi leaping, as the jungle rocks with the concussive onslaught.

HUNTERS LOOK UP as a dark shape hovers overhead. The downblast of the VALKYRIE’S lift jets shreds the forest.

INSIDE THE SHUTTLE’S cargo bay, a row of DAISYCUTTERS are lined up. Troopers roll the first pallet down the ramp.

THE PALLET falls into the jungle below and --

BA-WHOOOOOM! -- an enormous high-explosive blast rips a huge hole in the forest. A white concussion wave flashes out across the ground for hundreds of meters in all directions.

AT GROUND LEVEL it is an apocalypse. Running Na’vi are blasted out of existence by fire and shock waves.

IN THE CARGO BAY the troopers WHOOP and high-five.

TROOPERS
Yeah baby! Get some!

GROUND TROOPS ADVANCE, firing flamethrowers, AR’s and GAU- 90’s.

EXT. FLOATING MOUNTAINS - AERIAL

Quaritch’s fleet flies into the shadow of the Mountain of Truth.

QUARITCH
Blue team, stay with the ground units. Red team, with me. We’re punching for the main target.

Quaritch glances up to see --

A squadron of WINGED SHAPES, diving out of the morning glare like birds of prey.

CLOSE ON JAKE, rushing straight down, SCREAMING a war cry as he leads the charge and --

SCORES OF BANSHEES SLAM into the gunships and Samsons like falcons hitting fat turkeys. The air battle is joined.



JAKE’S GREAT LEONOPTERYX flairs into its signature crimson X shape just before --

K-WHAM!! -- it knocks a Scorpion tumbling. It coils around the gunship, slashing furiously as they spin together. JAKE can barely hang onto the gyrating creature.

The pilot of the Scorpion sees nothing but jaws slamming into his canopy. Jake releases the gunship and it careens into a CLIFF, tearing off one rotor -- then plummets into the trees. There is a satisfying FIREBALL.

SCORPIONS fall out of formation to pursue individual banshee riders, FIRING cannons and rockets.

JAKE BANKS as the cliff face next to him explodes with cannon rounds. SCREAMING down on him is another Scorpion.

JAKE tucks and dives along the cliff, feeling the rounds splitting the air around him and --

The Scorpions bank after the furiously jinking banshees as they head for cover among the floating mountains, or dive down into the trees.

DOOR GUNNERS in a SAMSON are shooting down banshees like Messerschmidts from a B-17 as --

WE FOLLOW TSU’TEY’S BANSHEE in a full delta dive. He swoops in from its blind spot and --

THE GUNNERS SWIVEL too late as Tsu’tey flashes past them, SHOOTING ARROWS with deadly accuracy.

A SCORPION gunship dives after a banshee. It fires an air-to- air missile and the banshee vanishes in an EXPLOSION.

WIDE SHOT as thirty ships and hundreds of banshees wheel and dive, like the Battle of Britain. Banshees are hit by guns and missiles, falling out of the sky. The occasional trail of smoke and fire marks the demise of a tilt-rotor.

IN THE CENTER the Dragon is pouring out hellacious fire -- tracer rounds from multiple turrets and missiles from the stub-wing pods.

NEYTIRI BANKS hard as TRACERS flash past her. A Scorpion is right on her ass as --

SHE ROLLS inverted and dives under the edge of Mons Veritatis, then rolls out, zig-zagging through the dangling vines but --



THE GUNSHIP stays on her. It rips through the vines, and tracers FLASH toward us as --

SHE JINKS the banshee around a thundering waterfall but --

HER PURSUER explodes right through the curtain of water. It launches an air-to-air missile. NEYTIRI jinks hard, diving. The missile hits a rock outcropping, pummeling her with the shock wave.

THE GUNSHIP follows her through a narrow slit between Mons Veritatis and a smaller floating island. They run this slot rolled up on their sides and --

THE SCORPION GUNNER locks up Neytiri for a missile shot but --

A SHADOW crosses his canopy. Out of the sun comes a crimson demon, shrieking over the roar of the turbines, and --

K-WHAMMM!! The leonopteryx SLAMS the gunship, driving it downward in a dive. The leonopteryx lashes at it with claws and teeth as they fall together out of control.

Jake kicks the gunship loose and it falls like a brick, breaking its back on a rocky promontory and EXPLODING.

FLYING WITH A SAMSON as a SECOND SAMSON falls in beside it. This one has its pilot door off, and the PILOT is wearing a breathing mask. The door gunners wave at --

TRUDY, her expression grim behind her mask. She holds the cyclic stick between her knees while she RAKES the other ship with BURSTS from an AR in her lap.

The pilot slumps over and the craft tumbles out of control.

TRUDY
You’re not the only ones with guns, you pricks.

NEYTIRI JINKS her banshee hard, an enemy Samson right behind her. The pilot is a hotdog, following her down into the trees, under the canopy.

They slalom among the trunks at high speed. The gunners hang half out the doors, firing. Bark and leaves explode around Neytiri as she zig-zags through the jungle.

THE BANSHEE dives under a huge tree limb, and the pilot follows. He looks up at the last second, catching a glimpse of blue-skinned figures.

THE HUNTERS drop a net of woven vines behind Neytiri and --



The SAMSON hits it hard. The net fouls the ship, FLIPPING IT backwards. It crashes upside down to the forest floor.
KABOOM!!

NEYTIRI’S BANSHEE is hit by GROUND-FIRE. It folds up like a broken kite, crashing down through branches and --

SHE SLAMS into the ground, stunned.

IN THE DRAGON Quaritch looks ahead, seeing the WELL OF SOULS. He taps the pilot and points --

QUARITCH
There it is.
(into his headset)
Valkyrie One, this is Dragon. Target is in sight.

IN THE CARGO BAY of Valkyrie One, the troopers ready their deadly loads.

TROOPER
Target in sight.

CIRCLING ABOVE, Tsu’tey falls in beside Jake, who talks to him by AIRCOM HEADSET.

JAKE
We have to stop the shuttles, no matter what it takes.

TSU’TEY nods. He signals, gathering other hunters, who fall in with him as he dives. Jake rolls in after them but --

A GUNSHIP drops in behind him and he is forced to evade as --

TSU’TEY LEADS the attack on the first shuttle. Hunters jink and weave through WITHERING FIRE from the escort ships.

GUNNERS with jerry-rigged gun mounts ride the broad backs of the shuttles, picking off banshees who get past the escort.

TSU’TEY is RAKED by a burst from the dorsal gunners. His mount crumples, plummeting with a dying scream and --

WE SPIRAL DOWN with him, the forest rushing up and --

A BLINDING BLIZZARD of green as he tears downward, catching at leaves and vines. He SLAMS to the ground, badly injured.

NEARBY, ampsuits and troopers advance across the forest floor, firing their cannons and flamethrowers. The GAU-90s rip the forest to shreds.



Norm, firing as he retreats, is HIT. He collapses, his avatar body mortally wounded as --

HYDRAULIC FEET approach, passing the bodies of direhorses and Na'vi hunters. Norm painfully tries to load another magazine, panting in fear and pain as --

AN AMPSUIT stomps up. Aims its cannon point blank. B-BLAM! INT. SHACK
The top of Norm’s LINK bangs open. He reels out, collapsing onto the floor, clutching himself as if he can still feel the pain of death.

He sits, huddled, shivering -- crazed. EXT. RAINFOREST
TSU’TEY lies gasping, mortally injured. He looks up, grimacing, as an ampsuit looms over him.

LYLE WAINFLEET reaches down and grabs Tsu’tey by his queue, lifting him painfully.

WAINFLEET
I hear this is worse than death for you, chief.

WAINFLEET cuts Tsu’tey's queue off near the base. TSU’TEY SCREAMS in agony, his nervous system exploding on overload. Grinning, Lyle holds up the queue -- Tsu’tey's only connection to the world-consciousness which is his life.

NEYTIRI -- bleeding, bruised -- staggers amid burning wreckage. AMPSUIT footsteps approach and she crouches behind a tree. Troopers are seconds from seeing her as --

NEYTIRI knocks an arrow to HER FATHER’S BOW, and readies herself for a last kamikaze shot when --

THE TROOPER on the far right of the firing line sees something on his screens.

TROOPER
Right flank -- something’s coming! It’s all lit up out there.

The troopers become aware of the GROUND SHAKING. A slow building thunderous ROAR and --

AN AMPSUIT comes FLYING out of the trees, cartwheeling past them, and the SHAKING BUILDS --



EXT. WELL OF SOULS

Mo'at opens her eyes in sudden realization as -- EXT. FOREST
The troopers pivot to face --

A WALL OF CHARGING HAMMERHEADS CRASHING out of the foliage in a shower of broken branches as --

THE TROOPERS open fire but -- the stampede drives over them like a wave. Tree-trunk feet shatter the ampsuit cockpits. Troopers are crushed or asphyxiated.

NEARBY the foot-soldiers see LIVING SHADOWS flow out of the gloom as --

VIPERWOLVES race among them with flashing jaws. The troopers FIRE wildly as they go down, hitting each other as much as their attackers.

The survivors break and run as more viperwolves bound out of the shadows.

JAKE BANKS, watching as HUNDREDS of rider-less WILD BANSHEES converge on Quaritch’s ships. They literally darken the sky.

JAKE
What the hell -- ?

The wild banshees wheel among the ships, ripping into them. ON JAKE -- slowly getting it. EYWA is in the fight.
JAKE
WHOO-HOOOO!

A GUNNER fires from the door of a Samson. There is a CRASH and the head of a BANSHEE lunges in the open door, jerking him out. Other banshees tear at the pilot’s windshield.

NEYTIRI watches in awe as the ground troops scatter in disarray. The viperwolves flash past her, ignoring her.

She senses something and turns slowly to see --

A THANATOR emerging from the smoke behind her. A glistening black demon. She stands paralyzed before its stygian gaze--

-- and the thanator lowers itself, until its head is just above the ground. It holds that position -- waiting.



Trembling, she approaches the waiting demon. EXT. FOREST
A smoky hell. Fires burn all around. The troopers are disorganized, falling back. Shooting at shadows. Panicked yelling fills the comm freq.

WAINFLEET and another AMPSUIT are charging together through the smoky gloom.

WAINFLEET
A and C squads -- rally at my pos. I want --
(screaming on the comm) Who’s screaming God damn it?!

TROOPER (ON RADIO)
We gotta get outta here! Whoever’s in charge, call for extraction!

WAINFLEET
Shutup you crybabies!

SOMETHING slams into the other ‘suit, tackling it OUT OF FRAME. Wainfleet whirls to see his squad-mate missing. He moves through a screen of foliage to reveal --

The AMPSUIT -- ripped open. Driver gone. Blood inside the cockpit. He WHIRLS at a sound in time to see --

A THANATOR LEAPING straight at him -- WAINFLEET raises his cannon but--

WHAM!! It’s on him, slamming him to the ground. The cannon goes flying. He’s face to face with its nightmare jaws, right outside his canopy--

On its back is NEYTIRI, and it’s a toss up which one looks more pissed off. The thanator rears back, muscles rippling as it poises to strike and --

K-KRAAACKK! Slams its teeth right through his canopy. Wainfleet’s SCREAM is brief.

Neytiri’s demon mount rears up and its triumphant ROAR echoes through the forest.

INT. CORRIDOR

Max runs down the hall, leading the other scientists. He’s yelling into an AIRCOM HANDSET --



MAX
Rogue One, Rogue One, this is Max. Tell Jake we are in motion.
(to the scientists)
Get in there. Barricade the door!

INT. LINK ROOM

The door is hurled open and the SCIENTISTS charge in.

Science geeks barricade the door as AVATAR-DRIVERS scramble into their link units, pulling the clamshells down.

INT. CORRIDOR

Max checks the door is secure from his side then runs down a connecting corridor.
CUT TO:

EXT. SHACK

HUMAN NORM emerges from the airlock, wearing breathing gear and carrying an AR. He stumbles, dazed, toward the battle.

EXT. MOUNTAINS/ AERIAL

JAKE SIGNALS and a formation of hunters rolls in, diving at the lead shuttle, which is already besieged by winged creatures.

THE CARGO RAMP is the scene of a pitched battle. Na’vi hunters hurl themselves off their mounts in waves, overwhelming the troopers.

HUNTERS are shot, falling out of the ship, as others fly in. They shoot arrows and spears from the end of the ramp, and troopers fall back deeper into the fuselage.

The panicked CREW CHIEF slams a switch and the ramp begins to close, a second before he is cut down by a spear.

JAKE’S LEONOPTERYX plummets at the shuttle from behind. He swoops down, flairs to reduce speed, rolls off his mount and lands, tumbling on the shuttle’s broad back as --

GUNNERS try to swing their guns toward him but he RAKES them with his AR, still running forward and --

JAKE PULLS two grenades from his battle harness, yanking the pins out with his teeth. He hurls them down the intakes of the VTOL turbofans as --

HIS LEONOPTERYX BANKS in a tight arc back toward him and --



HE SPRINTS ON as the grenades EXPLODE, shattering the turbines, which riddle the fuselage with shrapnel and --

JAKE LEAPS INTO SPACE, landing on the back of his mount and reconnecting. They flap away, gaining altitude as fire BLASTS out of the bottom of the shuttle.

ON THE FLIGHT DECK, the pilot feels the ship dropping.

PILOT
Mains to a hundred percent! Get me airspeed!

The pilot and copilot slam the throttle levers forward and --

The FUSION ENGINES BLAZE, thrusting the shuttle forward. It still falls, its remaining lift fans screaming, until --

IT’S CLIPPING the tree tops when it gets enough translational lift to fly and --

THE PILOT PULLS back on the stick, lifting the nose.

PILOT
We’re good!

BEHIND HIM, a surviving Na’vi hunter runs forward and -- THOONK! ARROWHEADS sprout from the pilots’ necks and chests.
THE SHUTTLE CLIMBS out of control, at full acceleration. It SLAMS into the underside of MONS Veritatis. It EXPLODES, and hundreds of tons of flaming debris drop back into the forest.

ON THE FLIGHT DECK of the other SHUTTLE, the pilots watch the wreckage falling.

PILOT
Valkyrie Two is breaking off. And if any of ya’ll want to get off this piece of shit planet, you better cover our ass, ‘cause we’re the only way back to orbit.

GUNSHIP PILOT
Roger that.

FROM THE DRAGON COCKPIT Quaritch watches the shuttle bank away, with most of the remaining gunships following.

QUARITCH
Get back here you worthless pukes!



PILOT
Are we breaking off?

Quaritch draws his pistol.

QUARITCH
What do you think?

He is over the edge-- no logic in his brain now. Only death. INT. OPS CENTER/CORRIDOR
Techs and troopers crowd around consoles, listening to all the yelling and confusion as they try to plot the disintegrating battle.

SELFRIDGE
(in growing alarm)
What the hell is going on out there?
CUT TO:

EXT. RAINFOREST

Regular troopers and volunteers FLEE through the jungle, scrambling to board SAMSONS as they touch down.

INT. DRAGON COCKPIT

The pilot listens to comms from Hell’s Gate.

PILOT
Sir, all ground units are falling back to the LZ.

Quaritch’s jaw clenches.

QUARITCH
Stay on target.

EXT. WELL OF SOULS

Mo'at LOOKS UP as the DRAGON appears over the trees like the shadow of Death. Around her, the Na’vi mothers clutch their children to them. We see AKWEY’S BOY among them.

INT. DRAGON COCKPIT

Quaritch sets the target cursor on the MOTHER TREE and what we recognize is the ghostly figure of Mo'at.

QUARITCH
Switch missiles. Arm all pods.





Arming.
PILOT


QUARITCH

Let’s see what these blue bastards do when I bitch-slap their goddess.

EXT. MOUNTAINS/ AERIAL

JAKE’S LEONOPTERYX drops toward the Dragon like a Mig 29. He pulls out, skimming over the ship. Uncoupling, he rolls backward off his mount and --

JAKE HITS, skidding, on the hull of the Dragon. He rolls to his feet, already running as --

QUARITCH sees the leonopteryx WHOOSH overhead and flap away with no rider. He snap-looks aft to see --

JAKE SPRINTING along the spine of the ship, yanking two grenades from his battle-harness, pulling the pins with his teeth, then --

QUARITCH’s hand shoots out and SLAMS the pilot’s CYCLIC STICK hard over. THE DRAGON lurches sideways, rolling sharply with a ROAR of protesting rotors and --

JAKE IS FLUNG off his feet. The grenades miss the TURBINE INTAKES. One bounces off the ship. The other lodges against a cowling and --

JAKE SLIDES OFF the ship, falling as -- K-BLAM! The grenade blows a two meter hole in the hull --

WHOOOSHH! Pandoran air swirls inside.

QUARITCH
(to the pilot) Put your mask on.

Quaritch leaps out of his seat, heading aft as --

JAKE GRABS the edge of a weapons pod, his feet dangling over open space.

HOLDING HIS BREATH, Quaritch blows a RESCUE HATCH and leans outside. Jake sees him aim his massive PISTOL.

K-WHAM! K-WHAM! Rounds clang next to Jake’s head. He LETS GO, plummeting into the trees --

Jake plunges through jungle canopy. He catches a HUGE LEAF, as Neytiri taught him -- it bends down, breaking his fall --



HE LETS GO, dropping again only to catch ANOTHER LEAF, and then another, and --

WE RUSH DOWN with him through this green blur. Jake drops to the ground in a feral crouch. Unhurt.

JAKE
(into his headset)
Quaritch is gonna take out the Well of Souls! He’s got a clear shot. Hit him, anybody that can! Do it now!

IN HER SAMSON Trudy Chacon is all business.

TRUDY
On it.

SHE BANKS hard, pulling g’s, coming around on the Dragon. She pours on the coal and the Samson leaps forward, straight at the WARSHIP.

QUARITCH, DRILLS a stream of tracers at her, tearing through her canopy, ripping chunks off her fuselage.

IN THE JUNGLE BELOW, Norm watches her kamikaze run --

NORM
No!

TRUDY
(clipped, pilot-like)
Norm, I love you.

TRUDY DIVES, raking through treetops and then, at the last instant, YANKS BACK on the stick and --

THE SAMSON leaps straight up and -- K-KRASH!! SHEARS OFF THE COCKPIT of the Dragon as --

QUARITCH THROWS HIMSELF aft along the aisle and --

TRUDY’S SAMSON disintegrates, the wreckage burning as it tumbles into the jungle.

MILES QUARITCH grips the bulkhead as he stares out the open front of the fuselage. Wind howls through wreckage where the pilot used to be. The forest rushes up to meet him and --

THE DRAGON CRASHES through splintering trees, IMPACTING in a lake with a WHITE BLAST of water.



EXT. RAINFOREST - DAY

Norm takes a few steps and drops to his knees. Imploded by grief.

INT. OPS CENTER/ HELL’S GATE

ON THE PLOTTING DISPLAY as Quaritch’s TRANSPONDER ICON
disappears.

TROOPER
Dragon is down. It’s off the board.

SELFRIDGE
What do you mean, off the board?!

Selfridge is stunned. Suddenly the ROAR of an ENGINE makes them all look up.

OUTSIDE THE WINDOW, MAX sits in the cab of an enormous SLASH- CUTTER. Max flips Selfridge the bird and pushes a lever forward --

SELFRIDGE
Oh shit.

Selfridge DIVES as --

K-RASHHHHH! The SPINNING TEETH of the SLASH-CUTTER tear
through the window in a blast of glass and lethal air. Alarms go off. The technicians dive for cover in a blizzard of glass and shredded debris.

The slash-cutter head pulls back, and AVATARS SCRAMBLE through the gaping hole into the Ops Center --

The TROOPERS look up to see blue giants aiming weapons down at them. The battle is over in seconds. The avatars are holding the Ops Center.

Selfridge lies there gasping, in his emergency mask. In shock. How could this be happening?
CUT TO:

EXT. LAKE

THE DRAGON lies half submerged. Out of the water FG, a shape rises -- a AMPSUIT. Inside -- MILES QUARITCH, his face bloody, his eyes burning.

He slogs out of the water, covered with mud, then strides into the forest.



QUARITCH’S AMPSUIT THUDS relentlessly through the jungle. He sees something through the foliage ahead -- the SHACK.

INSIDE THE SHACK Jake is oblivious under the link. Through a window we see Quaritch's AMPSUIT step into the clearing.

QUARITCH levels his GAU-90 at the shack. His finger goes to the firing button--

WHAM!! A six-legged BLACK DEMON tackles him.

Quaritch pivots as he falls, FIRING the cannon. It misses Neytiri by inches. He grapples with the THANATOR as its razor claws SCREECH over his metal armor.

THE TITANS twist and struggle. QUARITCH UNLEASHES a long burst from the cannon. Rounds tear into the creature, which SHRIEKS but --

NEYTIRI wills it to SMASH the cannon hard against a rock, tearing it loose from the ‘suit’s hand but --

Quaritch SLAMS the thanator back against a tree-trunk, almost crushing Neytiri.

CLOSE ON one hydraulic hand, as it draws the ‘suit’s KNIFE and --

QUARITCH TWISTS violently, ramming the knife up under the thanator’s chest armor. The creature ROARS and Quaritch flips on top of it, stabbing.

QUARITCH STABS DOWN AGAIN. The thanator slumps, pinning Neytiri's legs under its great bulk. She is trapped.

Quaritch looks down at Neytiri. She glares back at him, panting, scared but defiant.

JAKE (O.S.)
It’s all over Quaritch --

Quaritch turns, seeing Jake DROPPING from a tree limb. The ‘suit rises slowly, knife glinting in the morning sun.

QUARITCH
Nothing’s over while I’m breathing.

JAKE
Kinda hoped you’d say that.

QUARITCH SURGES forward. JAKE closes fast, snatching up the broken CANNON as --



Quaritch SLASHES DOWN with the knife and Jake parries, blocking it with the cannon. He CLOSES faster than the suit can move and --

K-CRACK! -- SLAMS the end of the cannon into the canopy, crazing it with a web of cracks as QUARITCH SLICES air with the huge knife. Jake ducks, coming up to meet the next slash and --

SMASHES the knife hand with the cannon once -- twice -- again
-- in a furious attack -- knocking the knife flying.

QUARITCH catches him with the other arm, hurling him away. Jake rolls just before --

THUDDD! -- the massive foot stomps down where he just was. He scrambles up as Quaritch CHARGES and --

JAKE DUCKS another round-house, LEAPING forward to smash the canopy again -- then again -- until it is WHITE with cracks. Quaritch manages to GRAB the cannon barrel but --

INSIDE THE COCKPIT, he sees nothing but the sun on the shattered glass. HE HURLS the cannon blindly, but Jake ducks. The massive cylinder cartwheels toward the shack and --

FROM INSIDE we see it CRASH against pressure window, crazing it but not penetrating. Jake’s link sits just inside.
INSIDE THE COCKPIT, Quaritch yanks a yellow handle and -- P-FOOM! -- the canopy BLOWS OFF, flying through the air.
Quaritch can see again. He dons his breathing mask. Bends to pick up his KNIFE.

NEARBY NEYTIRI struggles furiously, trying to get her legs free from underneath three tons of thanator.

QUARITCH, panting, glowers at Jake.

QUARITCH
How does it feel to betray your own race?

Then, inexplicably, he TURNS. Walks away.

FROM INSIDE the shack, we see him charge straight toward us and --

CRASH! -- he puts his hydraulic fist right through the window. He is reaching inside for the Link when --

JAKE HITS in a flying tackle with every ounce of force he has, knocking the ampsuit sideways and --



JAKE REACHES around the suit, grabbing Quaritch’s shoulder and, yanks him forward HARD, SMASHING his face into the edge of the cockpit but --

QUARITCH flings him off with a sweep of his arm, and Jake slams to the ground.

INSIDE THE LINK Jake is holding his breath as the toxic Pandoran air swirls in. GAS ALARMS SHRIEK.

NEYTIRI shoves with one free leg, desperately trying to pull her other leg out.

THE AMPSUIT charges, the knife flashing down and --

JAKE just manages to catch it in both hands, but the force of the attack drives him to his knees as --

QUARITCH pushes the knife down inexorably, until Jake is pinned against a rock, the blade now inches from his throat.

INSIDE THE LINK Jake is straining to stay conscious, to stay connected as --

THE KNIFE reaches his throat as --

THWAP! AN ARROW APPEARS in Quaritch’s chest. He looks up.

NEYTIRI STANDS -- a FURY released. A classic archer figure, she NOCKS another arrow. Then draws and releases smoothly.

TH-WHAP! The machine TOPPLES off Jake and lies still.

QUARITCH STARES at the two arrows in his chest. He touches the feathers of the ancient weapon, then -- with an ironic laugh -- he dies.

NEYTIRI runs up, another arrow nocked, bow drawn. Seeing Quaritch, she lowers her father’s bow.

JAKE sees her, then goes limp, his eyes rolling back, and -- INT. SHACK
HUMAN JAKE EXPLODES out of the Link, slamming to the floor where he gags for breath. With his last strength, he claws toward an emergency breathing mask -- across the room.

He scrambles toward it, on the edge of unconsciousness.

NEYTIRI VAULTS through the shattered window, landing in the debris like a cat. She GRABS the mask and flashes to Jake’s side -- puts the mask over his face and --



JAKE drags in breath after breath. He looks up at Neytiri, studying him as she holds him -- seeing his human body for the first time.

Jake touches her face, his pale human hand against the blue of her skin. There eyes meet across the glass of the mask -- together, separate. Worldless.
CUT TO:

EXT. RAINFOREST - DAY

MO’AT tends to the mortally wounded TSU’TEY as AVATAR JAKE arrives with Neytiri. Mo’at has bound his wounds, but by her expression, it is clear he cannot be saved.

Jake kneels and Tsu’tey opens his eyes. Through a haze of pain, he recognizes Jake.

TSU’TEY
(Na’vi)
I See you, Jakesully.

JAKE
I See you, Tsu’tey te Rongloa Ateyitan.

TSU’TEY
Are the people safe?

JAKE
They’re safe.

Tsu’tey weakly clutches his severed queue.

TSU’TEY
I can never ride again, or bond with my woman -- or hear the voice of Eywa. I can not lead the People. You will lead them, Jakesully.

JAKE
No. I’m not officer material.

TSU’TEY
It is decided. Now do the duty of
Olo’eyctan. Set my spirit free.

JAKE
I’m not killing you.

TSU’TEY
I am already dead.





No.
JAKE


TSU’TEY

It is the way. And it is good. I will be remembered --

Tsu’tey’s voice is weak, but thick with emotion.

TSU’TEY
-- I fought with Toruk Macto, we were brothers -- and he was my last shadow.

TSU’TEY’S HAND clasps with Jake’s in a fierce grip. Jake draws his knife.

TSU’TEY’S POV -- Jake leans forward, blocking the sun. HIS SHADOW falls across Tsu’tey.

JAKE
(Na’vi)
Forgive me, my Brother. Go now to the Mother Spirit.

By his movement, we know that he has ended Tsu’tey’s pain. Jake’s eyes well with tears as he continues reciting the prayer for the dead, and his Na’vi words carry over as we --
DISSOLVE TO:

EXT. HELL’S GATE -DAY

Na’vi ride direhorses among the abandoned machines of Hell’s Gate.

Banshees roost on the roofs of the modules, and stingbats flutter about, unimpeded. The SENTRY GUNS are silent, and the GATES are open to the forest.

JAKE (V.O.)
A few chose to stay. Fewer were chosen.

Max, Norm, and a few of the avatars hold AR’s as the personnel of Hell’s Gate file up the cargo ramp of the remaining shuttle. The evicted humans are sullen and angry, like POW’s.

JAKE and NEYTIRI stand together, watching the departure of the Sky People.

PARKER SELFRIDGE shuffles up the ramp. His eyes -- the eyes of a lost soul -- meet JAKE’S. He disappears into the ship.
CUT TO:



EXT. SPACE

ISV VENTURE STAR hangs suspended against the dark side of PANDORA. The ISV’s antimatter engines BLAZE to life and it accelerates out of orbit.

What remains IN FRAME is a virgin, primeval world. Spanning the black continents is a vast reticulated lace-work of BIOLUMINESCENCE -- a ghostly WEB connecting all of Pandora.
CUT TO:

EXT. RAINFOREST - DAY

The sun’s rays shaft down through the layers of canopy.

JAKE (V.O.)
The forest will heal, and so will the hearts of the People. New life keeps the energy flowing, like the breath of the world.

NEYTIRI, obviously pregnant, is bow-fishing in the shallows. Children jump and squeal with laughter in the river.

JAKE (V.O.)
This is my last videolog.

INT. LINK ROOM

VIDEO IMAGE -- Jake sits in a chair, talking straight TO CAMERA. He is thin, pale. He looks around the high tech room.

JAKE
The science guys will keep the lights on, here. But I won’t miss this place.

EXT. WELL OF SOULS - NIGHT

THE WILLOWS glow softly. The entire Omaticaya clan is gathered, seated in a prayer circle around the Mother Tree.

JAKE (V.O.)
I better wrap this up. There’s a funeral tonight, and I don’t want to be late. It was someone very close to me.

WIDE SHOT, moving in across the concentric rings of people, all plugged-in and softly chanting. MOVING toward the center, over the figure of Mo'at, to hover above --

NEYTIRI, kneeling beside two FIGURES on the dais --



JAKE and his AVATAR lie head to head. Human Jake is wearing an exomask. Both figures are still, hands folded, covered in translucent silken shrouds of ROOT-CILIA.

CAMERA CLOSES IN as Neytiri removes the mask from Jake's human face. She gently closes his dead eyes with her fingertips. Then bends and kisses him.

MOVE INTO CU on AVATAR JAKE as Neytiri’s hand comes into frame, stroking his cheek. TIGHTENING slowly to--
ECU JAKE’S EYES. Hold a beat, then -- They open.
CUT TO BLACK

`)
  .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error)
