db = db.getSiblingDB("test_db");
db.animal_db.drop();

db.teacher.insertMany([
	{
		"_id": "0001",
		"first_name": "Areerat",
		"last_name": "Trongratsameethong",
		"cmu_acc": "arrer_@cmu.ac.th",
		"pass": "1234",
		"advisee": ["640510641", "640510666"]
	},
	{
		"_id": "0002",
		"first_name": "Kamonphop",
		"last_name": "Srisopha",
		"cmu_acc": "kamonphop_@cmu.ac.th",
		"pass": "1234",
		"advisee": ["640510713"]
	},
	{
		"_id": "0003",
		"first_name": "Varin",
		"last_name": "Chouvatut",
		"cmu_acc": "varin_@cmu.ac.th",
		"pass": "1234",
		"advisee": ["640510634"]
	},
])

db.user.insertMany([
	{
		_id: "test0",
        name: "test_name0",
        email: "test_email0",
        password: "test_pass0"
	},
	{
		_id: "test1",
        name: "test_name1",
        email: "test_email1",
        password: "test_pass1"
	}
])

db.student.insertMany([
	{
		"_id": "000",
		"first_name": "000",
		"last_name": "000",
		"year_of_study": "000",
		"curriculum_year": "000",
		"cmu_acc": "000@000.com",
		"pass": "000",
		"enroll": "000"
	},
	{
		"_id": "111",
		"first_name": "111",
		"last_name": "111",
		"year_of_study": "111",
		"curriculum_year": "111",
		"cmu_acc": "111@111.com",
		"pass": "111",
		"enroll": "111"
	}
])

db.student.insertMany([
	{
		_id: "640510641",
		first_name: "Kiattipoom",
		last_name: "Khiawwan",
		year_of_plan: 2564,
		curriculum_year: 2564,
		cmu_acc: "kiattipoom_k@cmu.ac.th",
		pass: "$pbkdf2-sha256$29000$SWktpTTm/H8vRYjR2nuPcQ$eMYTVcZQnUpiKfO3lfFJpeyCUZH8fD0QxFztB43UVCY",
		study_plan: "แผนปกติ",
		enroll: [
				{subject_id: "001101", grade: 3, year: 1, credit: 3},
				{subject_id: "140104", grade: 2, year: 1, credit: 3},
				{subject_id: "203103", grade: 4, year: 1, credit: 3},
				{subject_id: "204111", grade: 2.5, year: 1, credit: 3},
				{subject_id: "206111", grade: 3.5, year: 1, credit: 3},
				{subject_id: "206183", grade: 2, year: 1, credit: 3},
				{subject_id: "001102", grade: 3, year: 1, credit: 3},
				{subject_id: "202101", grade: 2, year: 1, credit: 3},
				{subject_id: "204100", grade: 4, year: 1, credit: 3},
				{subject_id: "204114", grade: 2.5, year: 1, credit: 3},
				{subject_id: "206112", grade: 3.5, year: 1, credit: 3},
				{subject_id: "207187", grade: 2, year: 1, credit: 3},
				{subject_id: "001201", grade: 3.5, year: 2, credit: 3},
				{subject_id: "201190", grade: 3, year: 2, credit: 3},
				{subject_id: "204203", grade: 3, year: 2, credit: 3},
				{subject_id: "204231", grade: 2, year: 2, credit: 3},
				{subject_id: "204252", grade: 4, year: 2, credit: 3},
				{subject_id: "208269", grade: 2.5, year: 2, credit: 3},
				{subject_id: "001225", grade: 3.5, year: 2, credit: 3},
				{subject_id: "201111", grade: 3, year: 2, credit: 3},
				{subject_id: "204212", grade: 3.5, year: 2, credit: 3},
				{subject_id: "204232", grade: 3, year: 2, credit: 3},
				{subject_id: "204271", grade: 3, year: 2, credit: 3},
				{subject_id: "204355", grade: 3, year: 2, credit: 3},
				{subject_id: "204321", grade: 4, year: 3, credit: 3},
				{subject_id: "204341", grade: 3.5, year: 3, credit: 3},
				{subject_id: "204361", grade: 3.5, year: 3, credit: 3},
				{subject_id: "204451", grade: 3, year: 3, credit: 3},
				{subject_id: "204383", grade: 3.5, year: 3, credit: 3}
			]
	},
	{
		_id: "640510666",
		first_name: "Ginsontom",
		last_name: "Gunmai",
		year_of_plan: 2564,
		curriculum_year: 2564,
		cmu_acc: "ginsontom_g@cmu.ac.th",
		pass: "$pbkdf2-sha256$29000$TIkxRgjhvBdirNX6f8.5dw$iY3oioV4G5irM6.V1mhI2VzAtUnTmt/OeEzg3vBuxyg",
		study_plan: "แผนสหกิจศึกษา",
		enroll: [
			{subject_id: "001101", grade: 3, year: 1, credit: 3},
			{subject_id: "140104", grade: 2, year: 1, credit: 3},
			{subject_id: "203103", grade: 4, year: 1, credit: 3},
			{subject_id: "204111", grade: 2.5, year: 1, credit: 3},
			{subject_id: "206111", grade: 3.5, year: 1, credit: 3},
			{subject_id: "206183", grade: 2, year: 1, credit: 3},
			{subject_id: "001102", grade: 3, year: 1, credit: 3},
			{subject_id: "202101", grade: 2, year: 1, credit: 3},
			{subject_id: "204100", grade: 4, year: 1, credit: 3},
			{subject_id: "204114", grade: 2.5, year: 1, credit: 3},
			{subject_id: "206112", grade: 3.5, year: 1, credit: 3},
			{subject_id: "207187", grade: 2, year: 1, credit: 3},
			{subject_id: "001201", grade: 3.5, year: 2, credit: 3},
			{subject_id: "201190", grade: 2, year: 2, credit: 3},
			{subject_id: "204203", grade: 3, year: 2, credit: 3},
			{subject_id: "204231", grade: 2, year: 2, credit: 3},
			{subject_id: "204252", grade: 4, year: 2, credit: 3},
			{subject_id: "208269", grade: 2.5, year: 2, credit: 3},
			{subject_id: "001225", grade: 3.5, year: 2, credit: 3},
			{subject_id: "201111", grade: 2, year: 2, credit: 3},
			{subject_id: "204212", grade: 3.5, year: 2, credit: 3},
			{subject_id: "204232", grade: 2, year: 2, credit: 3},
			{subject_id: "204271", grade: 3, year: 2, credit: 3},
			{subject_id: "204363", grade: 2, year: 2, credit: 3},
			{subject_id: "204321", grade: 4, year: 3, credit: 3},
			{subject_id: "204341", grade: 2.5, year: 3, credit: 3},
			{subject_id: "204361", grade: 3.5, credit: 3},
			{subject_id: "204451", grade: 2, year: 3, credit: 3},
			{subject_id: "204333", grade: 3.5, year: 3, credit: 3},
			{subject_id: "176100", grade: 3.5, year: 3, credit: 3},
			{subject_id: "204306", grade: 2, year: 3, credit: 1},
			{subject_id: "204315", grade: 3.5, year: 3, credit: 3},
			{subject_id: "204490", grade: 2, year: 3, credit: 3},
			{subject_id: "204452", grade: 3, year: 3, credit: 3},
			{subject_id: "204422", grade: 2, year: 3, credit: 3},
			{subject_id: "261111", grade: 4, year: 3, credit: 3},
			{subject_id: "204390", grade: 3.5, year: 4, credit: 1},
			{subject_id: "204496", grade: 2, year: 4, credit: 6},
			]
	},
	{
		_id: "640510713",
		first_name: "Namsai",
		last_name: "Jaijing",
		year_of_plan: 2564,
		curriculum_year: 2564,
		cmu_acc: "nam_@cmu.ac.th",
		pass: "$pbkdf2-sha256$29000$ZYyxVsrZWysFYAzhPIewtg$IJxCAuq4PPrD7umIE3edPXvnxQTvVzWF84ye99IYbdY",
		study_plan: "แผนก้าวหน้า",
		enroll: [
				{subject_id: "001101", grade: 3, year: 1, credit: 3},
				{subject_id: "140104", grade: 2, year: 1, credit: 3},
				{subject_id: "203103", grade: 4, year: 1, credit: 3},
				{subject_id: "204111", grade: 2.5, year: 1, credit: 3},
				{subject_id: "206111", grade: 3.5, year: 1, credit: 3},
				{subject_id: "206183", grade: 2, year: 1, credit: 3},
				{subject_id: "001102", grade: 3, year: 1, credit: 3},
				{subject_id: "202101", grade: 4, year: 1, credit: 3},
				{subject_id: "204100", grade: 4, year: 1, credit: 3},
				{subject_id: "204114", grade: 2.5, year: 1, credit: 3},
				{subject_id: "206112", grade: 3.5, year: 1, credit: 3},
				{subject_id: "207187", grade: 2, year: 1, credit: 3},
				{subject_id: "001201", grade: 3.5, year: 2, credit: 3},
				{subject_id: "201190", grade: 4, year: 2, credit: 3},
				{subject_id: "204203", grade: 3, year: 2, credit: 3},
				{subject_id: "204231", grade: 4, year: 2, credit: 3},
				{subject_id: "204252", grade: 4, year: 2, credit: 3},
				{subject_id: "208269", grade: 2.5, year: 2, credit: 3},
				{subject_id: "001225", grade: 3.5, year: 2, credit: 3},
				{subject_id: "201111", grade: 4, year: 2, credit: 3},
				{subject_id: "204212", grade: 3.5, year: 2, credit: 3},
				{subject_id: "204232", grade: 4, year: 2, credit: 3},
				{subject_id: "204271", grade: 3, year: 2, credit: 3},
				{subject_id: "204363", grade: 3, year: 2, credit: 3},
				{subject_id: "204364", grade: 3, year: 2, credit: 3},
				{subject_id: "204383", grade: 3, year: 2, credit: 3},
				{subject_id: "204321", grade: 4, year: 3, credit: 3},
				{subject_id: "204341", grade: 2.5, year: 3, credit: 3},
				{subject_id: "204361", grade: 3.5, year: 3, credit: 3},
				{subject_id: "204451", grade: 2, year: 3, credit: 3},
				{subject_id: "204362", grade: 3.5, year: 3, credit: 3},
				{subject_id: "176100", grade: 3.5, year: 3, credit: 3},
				{subject_id: "204306", grade: 2, year: 3, credit: 1},
				{subject_id: "204315", grade: 3.5, year: 3, credit: 3},
				{subject_id: "204490", grade: 4, year: 3, credit: 3},
				{subject_id: "204452", grade: 3, year: 3, credit: 3},
				{subject_id: "204382", grade: 4, year: 3, credit: 3},
				{subject_id: "261111", grade: 4, year: 3, credit: 3},
				{subject_id: "204390", grade: 3.5, year: 4, credit: 1},
				{subject_id: "204491", grade: 2, year: 4, credit: 1},	
				{subject_id: "201114", grade: 4, year: 4, credit: 3},
				{subject_id: "204732", grade: 4, year: 4, credit: 3},
				{subject_id: "204736", grade: 4, year: 4, credit: 3},
				{subject_id: "204435", grade: 2, year: 4, credit: 3},
				{subject_id: "204725", grade: 4, year: 4, credit: 3},
				{subject_id: "204442", grade: 3.5, year: 4, credit: 3},
				{subject_id: "204499", grade: 3.5, year: 4, credit: 2},
				{subject_id: "204471", grade: 4, year: 4, credit: 3},	
				{subject_id: "204735", grade: 3, year: 4, credit: 3},
				{subject_id: "204365", grade: 2, year: 4, credit: 3},
				{subject_id: "751100", grade: 4, year: 4, credit: 3},
				{subject_id: "003191", grade: 4, year: 4, credit: 3},
			]
	}

])

db.curriculum.insertOne(
{
  "_id": 2564,
  "หน่วยกิต": 134,
  "หมวด": {
    "วิชาศึกษาทั่วไป": {
      "หน่วยกิต": 30,
      "วิชาบังคับ": {
        "หน่วยกิต": 24,
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้": [
          {
            "รหัสวิชา": "001101",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "001102",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "001201",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "001225",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "204100",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้ร่วมสร้างสรรค์นวัตกรรม": [
          {
            "รหัสวิชา": "201190",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นพลเมืองที่เข้มแข็ง": [
          {
            "รหัสวิชา": "140401",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "201111",
            "หน่วยกิต": 3
          }
        ]
      },
      "GE_Elective": {
        "หน่วยกิต": 6,
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้": [
          {
            "รหัสวิชา": "050100",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "074100",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "701181",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "702101",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้ร่วมสร้างสรรค์นวัตกรรม": [
          {
            "รหัสวิชา": "013110",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "176100",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "201114",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "703103",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "751100",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "851103",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นพลเมืองที่เข้มแข็ง": [
          {
            "รหัสวิชา": "801100",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "951100",
            "หน่วยกิต": 3
          }
        ]
      }
    },
    "วิชาเฉพาะ": {
      "หน่วยกิต": 99,
      "วิชาแกน": {
        "หน่วยกิต": 24,
        "รายวิชา": [
          {
            "รหัสวิชา": "202101",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "203103",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "204111",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "206111",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "206112",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "206183",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "207187",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "208269",
            "หน่วยกิต": 3
          }
        ]
      },
      "วิชาเอก": {
        "หน่วยกิต": 59,
        "วิชาเอกบังคับร่วม": {
          "หน่วยกิต": 41,
          "รายวิชา": [
            {
              "รหัสวิชา": "204203",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204306",
              "หน่วยกิต": 1
            },
            {
              "รหัสวิชา": "204212",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204271",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204321",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204361",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204451",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204390",
              "หน่วยกิต": 1
            },
            {
              "รหัสวิชา": "204490",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204114",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204232",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204252",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204315",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204341",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204231",
              "หน่วยกิต": 3
            }
          ]
        },
        "วิชาเอกบังคับประจำแผน": {
          "แผนปกติ": {
            "หน่วยกิต": 3,
            "รายวิชา": [
              {
                "รหัสวิชา": "204491",
                "หน่วยกิต": 1
              },
              {
                "รหัสวิชา": "204499",
                "หน่วยกิต": 2
              }
            ]
          },
          "แผนสหกิจศึกษา": {
            "หน่วยกิต": 7,
            "รายวิชา": [
              {
                "รหัสวิชา": "204496",
                "หน่วยกิต": 6
              },
              {
                "รหัสวิชา": "204497",
                "หน่วยกิต": 1
              }
            ]
          },
          "แผนก้าวหน้า": {
            "หน่วยกิต": 3,
            "รายวิชา": [
              {
                "รหัสวิชา": "204491",
                "หน่วยกิต": 1
              },
              {
                "รหัสวิชา": "204499",
                "หน่วยกิต": 2
              }
            ]
          }
        },
        "วิชาเอกเลือก": {
          "แผนปกติ": {
            "หน่วยกิต": 15,
            "เงื่อนไข": {
              "400": 9
            }
          },
          "แผนสหกิจศึกษา": {
            "หน่วยกิต": 12,
            "เงื่อนไข": {
              "400": 6
            }
          },
          "แผนก้าวหน้า": {
            "หน่วยกิต": 27,
            "เงื่อนไข": {
              "400": 9,
              "700": 12
            }
          },
          "รายวิชา": {
            "300": [
                  {
                      "รหัสวิชา": "204325",
                      "หน่วยกิต": 3
                  },
                            {
                                "รหัสวิชา": "204333",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204335",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204362",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204363",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204364",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204365",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204381",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204382",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204383",
                                "หน่วยกิต": 3
                            }
                        ],
                        "400": [
                            {
                                "รหัสวิชา": "204422",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204423",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204424",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204425",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204426",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204432",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204435",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204441",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204442",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204443",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204452",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204453",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204454",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204456",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204471",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204481",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204482",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204483",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204494",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204495",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206325",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206336",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206370",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206428",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206463",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206476",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206481",
                                "หน่วยกิต": 3
                            }
                        ],
                        "700":[
                            {
                                "รหัสวิชา": "204712",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204713",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204715",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204721",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204725",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204728",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204732",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204735",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204736",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204737",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204779",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204789",
                                "หน่วยกิต": 3
                            },
                            
                            ]
          }
        }
        
      },
      "วิชาโท": {
          "หน่วยกิต": 15
        }
    },
    "เสรี": {
      "หน่วยกิต": 6
    }
  }
}
)