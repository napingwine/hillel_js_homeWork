const roles = {
	admin: "https://cdn-icons.flaticon.com/png/512/4532/premium/4532517.png?token=exp=1658140167~hmac=59312df4e8c1ebfd05dea6fe3912a841",
	student: "https://cdn-icons.flaticon.com/png/512/4532/premium/4532513.png?token=exp=1658140148~hmac=a4fbccce327ad70391ad40c4914fec68",
	lector: "https://cdn-icons.flaticon.com/png/128/4532/premium/4532472.png?token=exp=1658140112~hmac=b33c8337a05542fd9e41460aae48f2d4"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://cdn-icons.flaticon.com/png/512/4333/premium/4333640.png?token=exp=1658139027~hmac=523a3303a67d832c4d476e9458f3ad84",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://cdn-icons.flaticon.com/png/512/4333/premium/4333734.png?token=exp=1658142359~hmac=d42e5c73ee483f7f8150075d92719815",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://cdn-icons.flaticon.com/png/512/4333/premium/4333696.png?token=exp=1658142354~hmac=5cb2b88bee7db9a1bc8669e5913fd2d5",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://cdn-icons-png.flaticon.com/512/4333/4333620.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "https://cdn-icons.flaticon.com/png/512/4333/premium/4333701.png?token=exp=1658140474~hmac=f5766e7921dd4ca387df4624e6bfc172",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]

class User {
	constructor({ img, name, age, role, courses }) {
		this.img = img
		this.name = name
		this.age = age
		this.role = role
		this.hasCourses(courses)
	};

	hasCourses(courses) {
		if (courses) {
			return this.courses = courses
		}
	};

	renderCourses() {
		return ''
	};

	getGradation(userGradation) {
		for(let key in gradation) {
			if(userGradation <= key) return gradation[key];
		}
	};

	render() {
		return (
			`<div class="user">
				<div class="user__info">
						<div class="user__info--data">
								<img src="${this.img}" alt="${this.name}" height="50">
								<div class="user__naming">
										<p>Name: <b>${this.name}</b></p>
										<p>Age: <b>${this.age}</b></p>
								</div>
						</div>
						<div class="user__info--role ${this.role}">
								<img src="${roles[this.role]}" alt="${this.role}" height="25">
								<p>${this.role}</p>
						</div>
				</div>
				${this.courses ? this.renderCourses() : ''}
			</div>`
		)
	};
};

class Student extends User {
	constructor(user) {
		super(user)
	};

	renderCourses() {
		return (
			`<div class="user__courses">
				${this.courses.map(el =>
				`<p class="user__courses--course student">
						${el.title} <span class="${this.getGradation(el.mark)}">${this.getGradation(el.mark)}</span>
					</p>`
			).join('')}
			</div>`
		)
	};
};

class Admin extends User {
	constructor(user) {
		super(user)
	};

	renderCourses() {
		return (
			`<div class="user__courses admin--info">
				${this.courses.map(el => `
					<div class="user__courses--course admin">
						<p>Title: <b>${el.title}</b></p>
						<p>Admin's score: <span class="${this.getGradation(el.score)}">${this.getGradation(el.score)}</span></p>
						<p>Lector: <b>${el.lector}</b></p>
					</div>
				`).join('')}
			</div>`
		)
	};
};

class Lector extends User {
	constructor(user) {
		super(user)
	};

	renderCourses() {
		return (
			`<div class="user__courses admin--info">
				${this.courses.map(el => `
					<div class="user__courses--course lector">
						<p>Title: <b>${el.title}</b></p>
						<p>Lector's score: <span class="${this.getGradation(el.score)}">${this.getGradation(el.score)}</span></p>
						<p>Average student's score: <span class="${this.getGradation(el.studentsScore)}">${this.getGradation(el.studentsScore)}</span></p>
					</div>
				`).join('')}
			</div>`
		)
	};
};

const renderUsersList = (users) => {
	return (
		`<div class="users">
			${users.map(el => {
			let user;
			if (el.role === 'student') {
				user = new Student(el).render()
			} else if (el.role === 'admin') {
				user = new Admin(el).render()
			} else if (el.role === 'lector') {
				user = new Lector(el).render()
			}
			return user
		}).join('')
		}
		</div>`
	);
};

document.write(renderUsersList(users));