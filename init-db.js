db = db.getSiblingDB("test_db");
db.animal_db.drop();

db.teacher.insertMany([
	{
		_id: "0001",
		first_name: "Areerat",
		last_name: "Trongratsameethong",
		cmu_acc: "arrer_cmu.ac.th",
		pass: "1234",
		advisee: ["640510641", "640510666"]
	},
	{
		_id: "0002",
		first_name: "Kamonphop",
		last_name: "Srisopha",
		cmu_acc: "kamonphop_cmu.ac.th",
		pass: "1234",
		advisee: ["640510713"]
	},
	{
		_id: "0003",
		first_name: "Varin",
		last_name: "Chouvatut",
		cmu_acc: "varin_vcmu.ac.th",
		pass: "1234",
		advisee: ["640510634"]
	},
])