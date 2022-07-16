export default function Home() {

	return (
		<>
			<div className="home">
				<div className="home_slider_container">
					{/* carousel or banner */}
					<div className="masthead">
						<div className="container h-50">
							<div className="row h-100 align-items-center">
								<div className="col-12 text-center">
									<h2 className="fw-light">SE (Sem. III) - TE (Sem. V)</h2>
									<h4 className="mx-2">Regular Batches commencing from Mon, 25 July, apply now.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Featured About Us */}
			<div className="team-boxed">
				<div className="container">
					<div className="intro w-80">
						<h2 className="text-center">Why Join Us ?</h2>
						<h6 className="text-center w-100" style={{ width: "100%" }}>
							Engineering Minds comprises a team of teachers having seamless wealth of knowledge and insurmountable experience. The expertise of these teachers and their unique teaching techniques has helped thousands of students achieve meritorious marks in their exams. Every teacher of our team has experience of 20+ years and has taught 15000+ engineering students in their respective careers. Our endeavor is to excel in everything we do. We are currently offering OFFLINE coaching in BORIVALI and MUUND.						</h6>
					</div>
					<div className="row people">
						<div className="col-md-6 col-lg-4 item">
							<div className="box">
								<img className="rounded-circle" src="assets/images/balance.png" />
								<h3 className="name" style={{ color: "black" }}>Balanced Approach</h3>
								<p className="title"></p>
								<p className="description"> between exam-orientedness and conceptual understanding. </p>
								<div className="social"></div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 item">
							<div className="box">
								<img className="rounded-circle" src="assets/images/time.png" />
								<h3 className="name" style={{ color: "black" }}>Teaching At A slower Pace</h3>
								<p className="title"></p>
								<p className="description">hence, students understands each and everything.</p>
								<div className="social"></div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 item">
							<div className="box">
								<img className="rounded-circle" src="assets/images/speedometer.png" />
								<h3 className="name" style={{ color: "black" }}>Maximum Number Of Problems Covered</h3>
								<p className="title"></p>
								<p className="description">So more chance of scoring well in exam.</p>
								<div className="social"></div>
							</div>
						</div>
					</div>
					<div className="row people">
						<div className="col-md-6 col-lg-4 item">
							<div className="box">
								<img className="rounded-circle" src="assets/images/punctuality.png" />
								<h3 className="name" style={{ color: "black" }}>Highly Punctual</h3>
								<p className="title"></p>
								<p className="description">so the portion completes on time with maximum syllabus coverage.</p>
								<div className="social"></div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 item">
							<div className="box">
								<img className="rounded-circle" src="assets/images/notebook.png" />
								<h3 className="name" style={{ color: "black" }}>High Structured Notes Provided</h3>
								<p className="title"></p>
								<p className="description">no need of referring other books or notes.</p>
								<div className="social"></div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 item">
							<div className="box">
								<img className="rounded-circle" src="assets/images/check-mark.png" />
								<h3 className="name" style={{ color: "black" }}>Teaching From Scratch With No Assumptions</h3>
								<p className="title"></p>
								<p className="description">as if student knows nothing.</p>
								<div className="social"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
