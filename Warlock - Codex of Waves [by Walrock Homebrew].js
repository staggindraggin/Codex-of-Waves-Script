/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Spellbook
	Effect:		This script adds a spellbook, named "The Codex of Waves"
				This spells are made by Walrock Homebrew
    Version:    0.1 - initial release with only spells from Fathom Horror and Warlock spells up to 2nd level
	Code by:	staggindraggin
	Date:		2019-08-04 (sheet v12.999)
*/

var iFileName = "Warlock - Codex of Waves [by Walrock Homebrew].js";
RequiredSheetVersion(12.999);

SourceList["WH:CW"] = {
	name : "Walrock Homebrew: Codex of Waves v0.2",
	abbreviation : "WH:CW",
	group : "Walrock Homebrew",
	url : "https://walrock-homebrew.blogspot.com/2017/03/spells-codex-of-waves-second-draft.html",
	date : "2017/03/06"
};

// Add included spells

SpellsList["aquabolt"] = {
	name : "Aquabolt",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["WH:CW", 5],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged atk for 1d6 bludg. dmg; On hit, crea pushed back 5-ft; +1d6 dmg at CL 5, 11, and 17",
	descriptionFull : "You conjure a sphere of turbulent water and hurl it at your foes. Make a ranged spell attack against a creature within range. On a hit, that creature takes 1d6 bludgeioning damage and, if it is size large or smaller, it is pushed back 5 feet." + "\n   " +  "The spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)"
};
SpellsList["bigby's blistering barnacles"] = {
	name : "Bigby's Blistering Barnacles",
	classes : ["druid","sorcerer", "warlock"],
	source : [["WH:FH", 4],["WH:CW", 5]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
    compMaterial : "A single barnacle and a droplet of lye",
	duration : "Conc, 1 min",
    save: "Con",
	description : "1 crea 1d6+1d6/SL Acid dmg at end of each turn, disadv. on atks, Dex svs, and Cha chks; Str end. B",
	descriptionFull : "Choose a creature you can see within range. The target must succeed on a Constitution saving throw or become covered head to toe in barnacles of varying sixes for the duration of this spell." + "\n   " + "While covered in barnacles, the creature has disadvantage on attacks, Dexterity saving throws, and Charisma checks. At the end of each turn the creature is still covered in barnacles, it takes 1d6 acid damage." + "\n   " + "A creature within 5 feet of the target of this spell (including the target itself) may attempt to remove the barnacles by using an action to make a Strength check against your spell save DC. If this check succeeds the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the acid damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["cresting waves"] = {
	name : "Cresting Waves",
	classes : ["cleric","druid","sorcerer","warlock","wizard"],
	source : ["WH:CW", 5],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "S,M",
    compMaterial : "A drop of water",
	duration : "Instantaneous",
	description : "Ranged atk on crea + 2 crea within 10 ft; 3d4+1d4/SL bludg. dmg and pushed 10+5ft/SL. See Book.",
	descriptionFull : "With a gesture, you summon a roaring wave of water to buffet a creature within range. Target a creature within range, and make a ranged spell attack against that creature and against up to two other creatures within 10 feet of your chosen target. Any creature hit by this attack takes 3d4 bludgeoning damage and is pushed up to 10 feet away from you in a direction you choose." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage done by this spell increases by 1d4 and the distance pushed increases by up to 5 feet, for each slot level above 1st. You may also  make a ranged spell attack againt one additional creature within 10 feet of the target for each slot level above 1st."
};
SpellsList["depthsurge"] = {
	name : "Depthsurge",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["WH:FH", 4],["WH:CW", 6]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,M",
	compMaterial : "A shattered vial of water",
	duration : "Instantaneous",
	save : "Str",
	description : "10-ft rad all 4d10+1d10/SL bludg. dmg, 15+5ft/SL straight line, prone; save halves dmg, no move. B",
	descriptionFull : "You conjure a powerful explosion of water, scattering creatures affected by it. Choose a point within range. Creatures within a 10-foot radius sphere must make a Strength saving throw" + "\n   " + "If a creature fails this saving throw, it takes 4d10 bludgeoning damage, is knocked 15 feet away in a straight line from the center of the explosion, and is rendered prone. A creature that succeeds on this saving throw takes half damage and is subject to no other effects from this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d10 and the distance pushed increases by 5ft, for each slot level above 4th."
};
SpellsList["flowsight"] = {
    name : "Flowsight",
	classes : ["bard","druid","ranger","warlock"],
	source : ["WH:CW", 6],
	level : 2,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "S,M",
    compMaterial : "Eyestalk of a sea snail",
	duration : "1 hour",
	description : "Willing crea can sense through a liquid and knows location of everything it touches. See Book.",
	descriptionFull : "You touch a willing creature, granting it the ability to extend its senses through a body of water or other liquid. When the creature is touching a body of water or liquid, even as small as a puddle or as large and interspaced as an area of falling rain, the creature knows the exact location of everthing the body of liquid touches, up to maximum distance of 120 feet. This sense can even detect creatures or obstacles that are invisible and in contact with the liquid, and can instantly discern illusions immersed in the liquid for what they actually are."    
};
SpellsList["geyser"] = {
    name : "Geyser",
	classes : ["cleric","druid","sorcerer","warlock","wizard"],
	source : ["WH:CW", 6],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "5-ft rad,10-ft tall; crea must Dex save or lifted to top and 3d6+1d6/SL bludg. dmg, prone. B.",
	descriptionFull : "Choose a point on the ground within range. A geyser with a base of 5 feet by 5 feet and a height of up to 10 feet erupts from this point. If a creature sized Large or smaller is on top of this point, it must make a Dexterity saving throw. If it succeeds, the creature moves to the closest available space of its choice not occupied by the geyser. If the creature fails the saving throw, however, it takes 3d6 bludgeoning damage, is rendered prone, and is carried to the top of the geryser." + "\n   " + "The geyser blocks line of sight, and creatures within or at the top of the geyser are both swimming and in difficult terrain. The geyser lasts until the end of your next turn, at which point it recedes into the earth. Any creatures still atop or within the geyser when this ahppens immediately begin falling, and take damahge from the fall as normal." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage done by this spell increases by 1d6 and the height of the geyser increases by 10ft, for each slot level above 2nd."    
};
SpellsList["red tide"] = {
	name : "Red Tide",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["WH:FH", 4],["WH:CW", 8]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "S,M",
	compMaterial : "A pinch of brine",
	duration : "Instantaneous",
	save : "Con",
	description : "20-ft rad 5-ft tall all 2d10 bludg.+2d10 Psn dmg, Psnd until end your next turn. See Book",
	descriptionFull : "Choose a point within range that is either on or within a body of water, or on solid ground. A torrent of frothing red water issues forth, mercilessly battering all creatures within a 5 foot tall, 20 foot radius cylinder centered on that point" + "\n   " + "Creatures within this area must make a Constitution saving throw, taking 2d10 bludgeoning and 2d10 Poison damage if they fail this save, and half that amount if the succeed. A creature that fails this saving throw is also poisoned until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the bludgeoning damage or the Poison damage (your choice) increases by 1d10 for each slot level above 5th."
};
SpellsList["riptide"] = {
	name : "Riptide",
	classes : ["cleric","druid","sorcerer","warlock","wizard"],
	source : ["WH:CW", 8],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged atk for 1d6 bludg. dmg; On hit, crea pushed back 5-ft; +1d6 dmg at CL 5, 11, and 17",
    descriptionFull : "You conjure a sphere of turbulent water and hurl it at your foes. Make a ranged spell attack against a creature within range. On a hit, that creature takes 1d6 bludgeioning damage and, if it is size large or smaller, it is pushed back 5 feet." + "\n   " +  "The spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)"
};
SpellsList["urchin's spines"] = {
	name : "Urchin's Spines",
	classes : ["druid","warlock"],
	source : [["WH:FH", 5],["WH:CW", 8]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "S,M",
    compMaterial : "A sea urhcin spine, sewing needle, pine needle, or similar",
	duration : "Conc, 1 min",
	description : "Crea grows spikes on body. 1d6 pierce+1d6 psn dmg to crea that touch/atk trgt. One dmg +1d6/SL. B",
	descriptionFull : "A willing creature that you touch sprouts clusters of 3 inch long purple or black spines along its entire body. Any time a spined creature is the target of a melee attack, a spell with a range of touch (not including this one), or an ability that requires touching the spined creature, the targeting creature takes 1d6 piercing and 1d6 poison damage." + "\n   " + "Creatures affected by this spell have disadvantage on all Charisma checks besides Intimidation checks." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, either the piercing or poison damage (you choose) increases by 1d6 for each slot level above 2nd."
};