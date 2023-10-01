db = db.getSiblingDB("test_db");
db.animal_db.drop();

db.curriculum_manager.insertMany([
	{
		"_id": "arr_@cmu.ac.th",
		"first_name": "Areerat",
		"last_name": "Trongratsameethong",
		"pass": "$pbkdf2-sha256$29000$SWktpTTm/H8vRYjR2nuPcQ$eMYTVcZQnUpiKfO3lfFJpeyCUZH8fD0QxFztB43UVCY"
	},
	{
		"_id": "narin@cmu.ac.th",
		"first_name": "na",
		"last_name": "rin",
		"pass": "$pbkdf2-sha256$29000$SWktpTTm/H8vRYjR2nuPcQ$eMYTVcZQnUpiKfO3lfFJpeyCUZH8fD0QxFztB43UVCY"
	}
])

db.teacher.insertMany([
	{
		"_id": "arrer_@cmu.ac.th",
		"first_name": "Areerat",
		"last_name": "Trongratsameethong",
		"pass": "$pbkdf2-sha256$29000$SWktpTTm/H8vRYjR2nuPcQ$eMYTVcZQnUpiKfO3lfFJpeyCUZH8fD0QxFztB43UVCY",
		"advisee": ["640510641", "640510666"]
	},
	{
		"_id": "kamonphop_@cmu.ac.th",
		"first_name": "Kamonphop",
		"last_name": "Srisopha",
		"pass": "$pbkdf2-sha256$29000$SWktpTTm/H8vRYjR2nuPcQ$eMYTVcZQnUpiKfO3lfFJpeyCUZH8fD0QxFztB43UVCY",
		"advisee": ["640510713"]
	},
	{
		"_id": "varin_@cmu.ac.th",
		"first_name": "Varin",
		"last_name": "Chouvatut",
		"pass": "$pbkdf2-sha256$29000$SWktpTTm/H8vRYjR2nuPcQ$eMYTVcZQnUpiKfO3lfFJpeyCUZH8fD0QxFztB43UVCY",
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
  "เกณฑ์การสำเร็จการศึกษา": {
    "แผนปกติ": {
        "เกรดเฉลี่ยตลอดหลักสูตร":2,
        "เกรดเฉลี่ยวิชาเอก":2
    },
    "แผนสหกิจศึกษา": {
        "เกรดเฉลี่ยตลอดหลักสูตร":2,
        "เกรดเฉลี่ยวิชาเอก":2
    },
    "แผนก้าวหน้า": {
        "เกรดเฉลี่ยตลอดหลักสูตร":3.5,
        "เกรดเฉลี่ยวิชาเอก":2
    }
  },
  "หมวด": {
    "วิชาศึกษาทั่วไป": {
      "หน่วยกิต": 30,
      "วิชาบังคับ": {
        "หน่วยกิต": 24,
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้": [
          {
            "รหัสวิชา": "001101",
            "ชื่อวิชา": "Fundamental English 1",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "001102",
            "ชื่อวิชา": "Fundamental English 2",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "001201",
            "ชื่อวิชา": "Critical Reading and Effective Writing",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "001225",
            "ชื่อวิชา": "English in Science and Technology Context",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "204100",
            "ชื่อวิชา": "Information Technology and Modern Life",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้ร่วมสร้างสรรค์นวัตกรรม": [
          {
            "รหัสวิชา": "201190",
            "ชื่อวิชา": "Critical Thinking, Problem Solving and Science Communication",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นพลเมืองที่เข้มแข็ง": [
          {
            "รหัสวิชา": "140104",
            "ชื่อวิชา": "Citizenship",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "201111",
            "ชื่อวิชา": "The World of Science",
            "หน่วยกิต": 3
          }
        ]
      },
      "GE_Elective": {
        "หน่วยกิต": 6,
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้": [
          {
            "รหัสวิชา": "050100",
            "ชื่อวิชา": "Usage of the Thai Language",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "074100",
            "ชื่อวิชา": "Nutrition for Promotion of Health",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "701181",
            "ชื่อวิชา": "Accounting for Non Accountants",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "702101",
            "ชื่อวิชา": "Finance for Daily Life",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้ร่วมสร้างสรรค์นวัตกรรม": [
          {
            "รหัสวิชา": "013110",
            "ชื่อวิชา": "Psychology and Daily Life",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "176100",
            "ชื่อวิชา": "Law and Modern World",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "201114",
            "ชื่อวิชา": "Environmental Science in Today's World",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "703103",
            "ชื่อวิชา": "Introduction to Entrepreneurship and Business",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "751100",
            "ชื่อวิชา": "Economics for Everyday Life",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "851103",
            "ชื่อวิชา": "Life and Society Through Media",
            "หน่วยกิต": 3
          }
        ],
        "กลุ่มวิชาด้านการพัฒนาทักษะการเป็นพลเมืองที่เข้มแข็ง": [
          {
            "รหัสวิชา": "801100",
            "ชื่อวิชา": "Architecture in Everyday Life",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "951100",
            "ชื่อวิชา": "Modern Life and Animation",
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
            "ชื่อวิชา": "Basic Biology 1",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "203103",
            "ชื่อวิชา": "General Chemistry 1",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "204111",
            "ชื่อวิชา": "Fundamentals of Programming",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "206111",
            "ชื่อวิชา": "Calculus 1",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "206112",
            "ชื่อวิชา": "Calculus 2",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "206183",
            "ชื่อวิชา": "Discrete Structure",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "207187",
            "ชื่อวิชา": "Physics 1",
            "หน่วยกิต": 3
          },
          {
            "รหัสวิชา": "208269",
            "ชื่อวิชา": "Statistics for Computer Science",
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
              "ชื่อวิชา": "Computer Science Technology",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204306",
              "ชื่อวิชา": "Ethics for Computer Professionals",
              "หน่วยกิต": 1
            },
            {
              "รหัสวิชา": "204212",
              "ชื่อวิชา": "Modern Application Development",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204271",
              "ชื่อวิชา": "Introduction to Artificial Intelligence",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204321",
              "ชื่อวิชา": "Database Systems",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204361",
              "ชื่อวิชา": "Software Engineering",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204451",
              "ชื่อวิชา": "Algorithm Design and Analysis",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204390",
              "ชื่อวิชา": "Computer Job Training",
              "หน่วยกิต": 1
            },
            {
              "รหัสวิชา": "204490",
              "ชื่อวิชา": "Research in Computer Science",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204114",
              "ชื่อวิชา": "Introduction to Object-oriented Programming",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204232",
              "ชื่อวิชา": "Computer Networks and Protocols",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204252",
              "ชื่อวิชา": "Data Structures and Analysis",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204315",
              "ชื่อวิชา": "Organization of Programming Languages",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204341",
              "ชื่อวิชา": "Operating Systems",
              "หน่วยกิต": 3
            },
            {
              "รหัสวิชา": "204231",
              "ชื่อวิชา": "Computer Organization and Architecture",
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
                "ชื่อวิชา": "Independent Study 1",
                "หน่วยกิต": 1
              },
              {
                "รหัสวิชา": "204499",
                "ชื่อวิชา": "Independent Study 2",
                "หน่วยกิต": 2
              }
            ]
          },
          "แผนสหกิจศึกษา": {
            "หน่วยกิต": 7,
            "รายวิชา": [
              {
                "รหัสวิชา": "204496",
                "ชื่อวิชา": "Cooperative Education",
                "หน่วยกิต": 6
              },
              {
                "รหัสวิชา": "204497",
                "ชื่อวิชา": "Seminar in Computer Science",
                "หน่วยกิต": 1
              }
            ]
          },
          "แผนก้าวหน้า": {
            "หน่วยกิต": 3,
            "รายวิชา": [
              {
                "รหัสวิชา": "204491",
                "ชื่อวิชา": "Independent Study 1",
                "หน่วยกิต": 1
              },
              {
                "รหัสวิชา": "204499",
                "ชื่อวิชา": "Independent Study 2",
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
                                "ชื่อวิชา": "Systems Analysis and Design",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204333",
                                "ชื่อวิชา": "Internet Application Development",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204335",
                                "ชื่อวิชา": "Competitive Programming",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204362",
                                "ชื่อวิชา": "Object-oriented Design",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204363",
                                "ชื่อวิชา": "Software Modeling and Requirements",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204364",
                                "ชื่อวิชา": "Software Design and Implementation",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204365",
                                "ชื่อวิชา": "Human-computer Interaction",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204381",
                                "ชื่อวิชา": "Numerical Computation and Software",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204382",
                                "ชื่อวิชา": "Computer Graphics",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204383",
                                "ชื่อวิชา": "Image Processing",
                                "หน่วยกิต": 3
                            }
                        ],
                        "400": [
                            {
                                "รหัสวิชา": "204422",
                                "ชื่อวิชา": "Data Warehousing",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204423",
                                "ชื่อวิชา": "Data Mining",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204424",
                                "ชื่อวิชา": "Ontology Design and Development",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204425",
                                "ชื่อวิชา": "Management Information System",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204426",
                                "ชื่อวิชา": "Data Engineering",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204432",
                                "ชื่อวิชา": "Computer Network Design and Management",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204435",
                                "ชื่อวิชา": "Parallel Processing",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204441",
                                "ชื่อวิชา": "Concurrent Programming and Distributed System",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204442",
                                "ชื่อวิชา": "Compiler Construction",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204443",
                                "ชื่อวิชา": "Computer System Security",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204452",
                                "ชื่อวิชา": "Theory of Computation",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204453",
                                "ชื่อวิชา": "Pattern Recognition",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204454",
                                "ชื่อวิชา": "Combinatorial Optimization Algorithms and Programming",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204456",
                                "ชื่อวิชา": "Machine Learning",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204471",
                                "ชื่อวิชา": "Artificial Intelligence",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204481",
                                "ชื่อวิชา": "Mathematical Programming and Software",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204482",
                                "ชื่อวิชา": "Simulation and Modelling",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204483",
                                "ชื่อวิชา": "Computer Vision",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204494",
                                "ชื่อวิชา": "Selected Topics in Computer Science 1",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204495",
                                "ชื่อวิชา": "Selected Topics in Computer Science 2",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206325",
                                "ชื่อวิชา": "Linear Algebra",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206336",
                                "ชื่อวิชา": "Real Analysis 1",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206370",
                                "ชื่อวิชา": "Probability 1",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206428",
                                "ชื่อวิชา": "Coding Theory",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206463",
                                "ชื่อวิชา": "Deterministic Optimization",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206476",
                                "ชื่อวิชา": "Game Theory",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "206481",
                                "ชื่อวิชา": "Graph Theory",
                                "หน่วยกิต": 3
                            }
                        ],
                        "700":[
                            {
                                "รหัสวิชา": "204712",
                                "ชื่อวิชา": "Computer Systems and Networks",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204713",
                                "ชื่อวิชา": "Cloud Computing and Big Data",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204715",
                                "ชื่อวิชา": "Intelligent Embedded System",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204721",
                                "ชื่อวิชา": "Data Engineering",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204725",
                                "ชื่อวิชา": "Data Analytics and Machine Learning",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204728",
                                "ชื่อวิชา": "Data Manipulation",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204732",
                                "ชื่อวิชา": "Software Engineering : Theory and Application",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204735",
                                "ชื่อวิชา": "Computation and Algorithms",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204736",
                                "ชื่อวิชา": "Software Process Improvement",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204737",
                                "ชื่อวิชา": "Software Quality Engineering",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204779",
                                "ชื่อวิชา": "Selected Topics in Computer Science",
                                "หน่วยกิต": 3
                            },
                            {
                                "รหัสวิชา": "204789",
                                "ชื่อวิชา": "Selected Topics in Computer Science",
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