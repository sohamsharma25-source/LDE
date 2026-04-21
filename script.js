const AppState = {
            currentPage: 'home',
            quizScore: 0,
            userLevel: 'beginner',
            currentQuestion: 0,
            userAnswers: [],
            quizCompleted: false,
            darkMode: false
        };
        
        // LDE-specific Quiz Questions (5 questions as requested)
        const QuizQuestions = [
            {
                question: "What is the integrating factor for \\( \\frac{dy}{dx} + 3y = x^2 \\)?",
                options: [
                    "\\( e^{3x} \\)",
                    "\\( e^{x^2} \\)",
                    "\\( e^{3y} \\)",
                    "\\( 3e^{x} \\)"
                ],
                correct: 0,
                explanation: "For \\( \\frac{dy}{dx} + P(x)y = Q(x) \\), integrating factor is \\( e^{\\int P(x) dx} \\). Here P(x)=3, so factor is \\( e^{\\int 3 dx} = e^{3x} \\)."
            },
            {
                question: "Which case applies for \\( y'' + 4y' + 4y = 0 \\)?",
                options: [
                    "Repeated real roots",
                    "Distinct real roots",
                    "Complex conjugate roots",
                    "No real roots"
                ],
                correct: 0,
                explanation: "Characteristic equation: \\( r^2 + 4r + 4 = 0 \\) ⇒ \\( (r+2)^2 = 0 \\) ⇒ \\( r = -2, -2 \\) (repeated real roots)."
            },
            {
                question: "The general solution for \\( y'' + 9y = 0 \\) is:",
                options: [
                    "\\( y = C_1 \\cos(3x) + C_2 \\sin(3x) \\)",
                    "\\( y = C_1 e^{3x} + C_2 e^{-3x} \\)",
                    "\\( y = (C_1 + C_2 x)e^{3x} \\)",
                    "\\( y = C_1 \\cosh(3x) + C_2 \\sinh(3x) \\)"
                ],
                correct: 0,
                explanation: "Characteristic: \\( r^2 + 9 = 0 \\) ⇒ \\( r = \\pm 3i \\). For complex roots \\( r = \\alpha \\pm i\\beta \\), solution is \\( y = e^{\\alpha x}[C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x)] \\). Here \\( \\alpha=0, \\beta=3 \\), so \\( y = C_1 \\cos(3x) + C_2 \\sin(3x) \\)."
            },
            {
                question: "For the equation \\( y'' - 2y' + y = e^{x} \\), what form should we try for particular solution?",
                options: [
                    "\\( Ax^2 e^{x} \\)",
                    "\\( Ae^{x} \\)",
                    "\\( (A + Bx)e^{x} \\)",
                    "\\( A\\cos(x) + B\\sin(x) \\)"
                ],
                correct: 0,
                explanation: "Since \\( e^{x} \\) is already in the complementary solution (characteristic roots: r=1,1), we multiply by \\( x^2 \\) for the particular solution trial: \\( y_p = Ax^2 e^{x} \\)."
            },
            {
                question: "In an RLC circuit, what does the damping case depend on?",
                options: [
                    "Comparison of \\( R^2 \\) and \\( 4L/C \\)",
                    "Value of inductance L only",
                    "Value of capacitance C only",
                    "The voltage source frequency"
                ],
                correct: 0,
                explanation: "The damping in an RLC circuit depends on the relationship: \\( R^2 \\) compared to \\( 4L/C \\). Overdamped if \\( R^2 > 4L/C \\), critically damped if \\( R^2 = 4L/C \\), underdamped if \\( R^2 < 4L/C \\)."
            }
        ];
        
        // Learning paths based on quiz scores
        const LearningPaths = {
            beginner: {
                title: "Beginner Path (Score: 0-2)",
                level: "Beginner",
                description: "Focus on foundational concepts and basic problem-solving",
                weeks: [
                    {
                        title: "Week 1: Review of Calculus & First-Order LDEs",
                        topics: [
                            "Review differentiation and integration techniques",
                            "Understand standard form: dy/dx + P(x)y = Q(x)",
                            "Learn integrating factor method step-by-step",
                            "Practice with simple first-order LDEs",
                            "Solve initial value problems"
                        ]
                    },
                    {
                        title: "Week 2: Second-Order Homogeneous LDEs",
                        topics: [
                            "Learn characteristic equation method",
                            "Understand three root cases: real distinct, repeated, complex",
                            "Practice solving homogeneous equations",
                            "Work with initial conditions",
                            "Build confidence with step-by-step solutions"
                        ]
                    },
                    {
                        title: "Week 3: Applications and Problem Solving",
                        topics: [
                            "Solve simple RLC circuit problems",
                            "Understand mass-spring-damper basics",
                            "Practice with mixed problem types",
                            "Review all solution methods",
                            "Build problem-solving speed and accuracy"
                        ]
                    }
                ]
            },
            intermediate: {
                title: "Intermediate Path (Score: 3-4)",
                level: "Intermediate",
                description: "Master core concepts and application techniques",
                weeks: [
                    {
                        title: "Week 1: Advanced Solution Methods",
                        topics: [
                            "Method of undetermined coefficients",
                            "Variation of parameters",
                            "Non-homogeneous equations with various forcing functions",
                            "Superposition principle applications",
                            "Complex problem-solving strategies"
                        ]
                    },
                    {
                        title: "Week 2: Engineering Applications",
                        topics: [
                            "Detailed RLC circuit analysis",
                            "Mass-spring-damper system design",
                            "Damping ratio calculations",
                            "Natural frequency determination",
                            "Real-world case studies"
                        ]
                    },
                    {
                        title: "Week 3: Advanced Problem Solving",
                        topics: [
                            "Mixed type differential equations",
                            "Boundary value problems",
                            "System modeling exercises",
                            "Optimization in engineering design",
                            "Preparation for advanced courses"
                        ]
                    }
                ]
            },
            advanced: {
                title: "Advanced Path (Score: 5)",
                level: "Advanced",
                description: "Explore advanced applications and problem-solving strategies",
                weeks: [
                    {
                        title: "Week 1: System Modeling and Analysis",
                        topics: [
                            "Multi-degree of freedom systems",
                            "Coupled differential equations",
                            "Matrix methods for systems",
                            "Eigenvalue problems in vibrations",
                            "Computer-aided solutions"
                        ]
                    },
                    {
                        title: "Week 2: Advanced Engineering Applications",
                        topics: [
                            "Control system design",
                            "Filter design in signal processing",
                            "Structural vibration analysis",
                            "Aerodynamic flutter prevention",
                            "Research-oriented problems"
                        ]
                    },
                    {
                        title: "Week 3: Research and Innovation",
                        topics: [
                            "Literature review on LDE applications",
                            "Research problem formulation",
                            "Mathematical modeling projects",
                            "Simulation and validation",
                            "Paper writing and presentation"
                        ]
                    }
                ]
            }
        };
        
        // 
        // Initialize the application
        function initApp() {
            // Load saved state from localStorage
            loadState();
            
            // Set up event listeners
            setupNavigation();
            setupQuiz();
            setupMobileMenu();
            setupFeedbackForm();
            setupPracticeHints();
            setupInteractiveCalculators(); // ADD THIS LINE for calculator functionality
            
            // Render the current page
            renderPage(AppState.currentPage);
            
            // Update the user level display
            updateUserLevelDisplay();
            
            // Trigger initial MathJax rendering
            if (window.MathJax) {
                window.MathJax.typesetPromise().then(() => {
                    console.log('MathJax initial rendering complete');
                });
            }
        }

        // Interactive Calculators for Applications Page
        function setupInteractiveCalculators() {
            // RLC Circuit Calculator
            const calculateRLCBtn = document.getElementById('calculateRLC');
            if (calculateRLCBtn) {
                calculateRLCBtn.addEventListener('click', calculateRLCCircuit);
            }
            
            // Mass-Spring-Damper Calculator
            const calculateMSDBtn = document.getElementById('calculateMSD');
            if (calculateMSDBtn) {
                calculateMSDBtn.addEventListener('click', calculateMassSpringDamper);
            }

            const calculateLDEBtn = document.getElementById('calculateLDE');
            if (calculateLDEBtn) {
                calculateLDEBtn.addEventListener('click', calculateFirstOrderLDE);
            }
        }
        
        // RLC Circuit Calculation Function
        function calculateRLCCircuit() {
            // Get input values
            const R = parseFloat(document.getElementById('resistance').value);
            const L = parseFloat(document.getElementById('inductance').value);
            const C = parseFloat(document.getElementById('capacitance').value);
            
            // Validate inputs
            if (isNaN(R) || isNaN(L) || isNaN(C) || R < 0 || L <= 0 || C <= 0) {
                alert('Please enter valid positive values for all parameters.');
                return;
            }
            
            // Calculate discriminant D = R^2 - 4L/C
            const D = Math.pow(R, 2) - (4 * L / C);
            
            // Determine damping state
            let dampingState = '';
            let dampingDescription = '';
            let r1, r2;
            let currentEquation = '';
            
            if (D > 0) {
                // Overdamped: Two distinct real roots
                dampingState = 'Overdamped';
                dampingDescription = 'Slow, non-oscillatory decay';
                r1 = (-R + Math.sqrt(D)) / (2 * L);
                r2 = (-R - Math.sqrt(D)) / (2 * L);
                currentEquation = `i(t) = C_1 e^{${r1.toFixed(3)}t} + C_2 e^{${r2.toFixed(3)}t}`;
            } else if (Math.abs(D) < 1e-10) {
                // Critically damped: Repeated real roots
                dampingState = 'Critically Damped';
                dampingDescription = 'Fastest return to equilibrium without oscillation';
                r1 = -R / (2 * L);
                currentEquation = `i(t) = (C_1 + C_2 t)e^{${r1.toFixed(3)}t}`;
            } else {
                // Underdamped: Complex conjugate roots
                dampingState = 'Underdamped';
                dampingDescription = 'Oscillatory decay';
                const alpha = -R / (2 * L);
                const beta = Math.sqrt(-D) / (2 * L);
                currentEquation = `i(t) = e^{${alpha.toFixed(3)}t}[C_1 \\cos(${beta.toFixed(3)}t) + C_2 \\sin(${beta.toFixed(3)}t)]`;
                r1 = `${alpha.toFixed(4)} + ${beta.toFixed(4)}i`; // Complex notation
                r2 = `${alpha.toFixed(4)} - ${beta.toFixed(4)}i`;
            }
            
            // Display results
            const resultContainer = document.getElementById('rlcResult');
            const discriminantEl = document.getElementById('discriminantResult');
            const dampingStateEl = document.getElementById('dampingState');
            const rootsEl = document.getElementById('characteristicRoots');
            const equationEl = document.getElementById('currentEquation');
            
            // Format discriminant display
            let discriminantDisplay = '';
            if (Math.abs(D) < 1e-10) {
                discriminantDisplay = `D = R^2 - 4L/C = ${R}^2 - 4(${L})/(${C}) = 0`;
            } else {
                discriminantDisplay = `D = R^2 - 4L/C = ${R}^2 - 4(${L})/(${C}) = ${D.toFixed(4)}`;
            }
            
            // Update DOM elements
            discriminantEl.innerHTML = `\\[${discriminantDisplay}\\]`;
            dampingStateEl.innerHTML = `\\[\\text{${dampingState}}: ${dampingDescription}\\]`;
            
            // Format roots display
            if (D >= 0) {
                rootsEl.innerHTML = `\\[r_1 = ${r1.toFixed(4)}, \\quad r_2 = ${r2 ? r2.toFixed(4) : r1.toFixed(4)}\\]`;
            } else {
                const alpha = -R / (2 * L);
                const beta = Math.sqrt(-D) / (2 * L);
                rootsEl.innerHTML = `\\[r_{1,2} = ${alpha.toFixed(4)} \\pm ${beta.toFixed(4)}i\\]`;
            }
            
            equationEl.innerHTML = `\\[${currentEquation}\\]`;
            
            // Show result container
            resultContainer.style.display = 'block';
            
            // Render MathJax for the new equations
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise().then(() => {
                    console.log('RLC circuit MathJax rendered');
                });
            }
        }
        
        // Mass-Spring-Damper Calculation Function
        function calculateMassSpringDamper() {
            // Get input values
            const m = parseFloat(document.getElementById('mass').value);
            const c = parseFloat(document.getElementById('damping').value);
            const k = parseFloat(document.getElementById('springConstant').value);
            
            // Validate inputs
            if (isNaN(m) || isNaN(c) || isNaN(k) || m <= 0 || c < 0 || k <= 0) {
                alert('Please enter valid positive values for all parameters.');
                return;
            }
            
            // Calculate natural frequency ω_n = sqrt(k/m)
            const omega_n = Math.sqrt(k / m);
            
            // Calculate damping ratio ζ = c / (2√(km))
            const zeta = c / (2 * Math.sqrt(k * m));
            
            // Determine damping state
            let dampingState = '';
            let motionEquation = '';
            
            if (zeta < 1) {
                // Underdamped
                dampingState = `Underdamped (\\zeta < 1): Oscillatory motion with exponential decay`;
                const omega_d = omega_n * Math.sqrt(1 - Math.pow(zeta, 2));
                motionEquation = `x(t) = e^{-${zeta.toFixed(3)}\\omega_n t}[A\\cos(${omega_d.toFixed(3)}t) + B\\sin(${omega_d.toFixed(3)}t)]`;
            } else if (Math.abs(zeta - 1) < 1e-10) {
                // Critically damped
                dampingState = `Critically Damped (\\zeta = 1): Fastest return to equilibrium without oscillation`;
                motionEquation = `x(t) = (A + Bt)e^{-\\omega_n t}`;
            } else {
                // Overdamped
                dampingState = `Overdamped (\\zeta > 1): Slow, non-oscillatory return to equilibrium`;
                const r1 = -zeta * omega_n + omega_n * Math.sqrt(Math.pow(zeta, 2) - 1);
                const r2 = -zeta * omega_n - omega_n * Math.sqrt(Math.pow(zeta, 2) - 1);
                motionEquation = `x(t) = Ae^{${r1.toFixed(3)}t} + Be^{${r2.toFixed(3)}t}`;
            }
            
            // Display results
            const resultContainer = document.getElementById('msdResult');
            const naturalFreqEl = document.getElementById('naturalFrequencyResult');
            const dampingRatioEl = document.getElementById('dampingRatioResult');
            const dampingStateEl = document.getElementById('dampingStateMSD');
            const equationEl = document.getElementById('motionEquation');
            
            // Update DOM elements
            naturalFreqEl.innerHTML = `\\[\\omega_n = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{${k}}{${m}}} = ${omega_n.toFixed(4)} \\, \\text{rad/s}\\]`;
            dampingRatioEl.innerHTML = `\\[\\zeta = \\frac{c}{2\\sqrt{km}} = \\frac{${c}}{2\\sqrt{${k} \\times ${m}}} = ${zeta.toFixed(4)}\\]`;
            dampingStateEl.innerHTML = `\\[${dampingState}\\]`;
            equationEl.innerHTML = `\\[${motionEquation}\\]`;
            
            // Show result container
            resultContainer.style.display = 'block';
            
            // Render MathJax for the new equations
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise().then(() => {
                    console.log('Mass-Spring-Damper MathJax rendered');
                });
            }
        }

        function calculateFirstOrderLDE() {
            const P = parseFloat(document.getElementById('ldeP').value);
            const Q = parseFloat(document.getElementById('ldeQ').value);
            const x0Raw = document.getElementById('ldeX0').value.trim();
            const y0Raw = document.getElementById('ldeY0').value.trim();

            if (isNaN(P) || isNaN(Q)) {
                alert('Please enter valid numeric values for P and Q.');
                return;
            }

            const hasX0 = x0Raw !== '';
            const hasY0 = y0Raw !== '';

            if ((hasX0 && !hasY0) || (!hasX0 && hasY0)) {
                alert('Please provide both x0 and y0 for the initial condition, or leave both empty.');
                return;
            }

            const x0 = hasX0 ? parseFloat(x0Raw) : null;
            const y0 = hasY0 ? parseFloat(y0Raw) : null;
            if ((hasX0 && isNaN(x0)) || (hasY0 && isNaN(y0))) {
                alert('Please enter valid numeric values for x0 and y0.');
                return;
            }

            const resultContainer = document.getElementById('ldeResult');
            const stepsEl = document.getElementById('ldeSteps');
            const generalEl = document.getElementById('ldeGeneralSolution');
            const particularEl = document.getElementById('ldeParticularSolution');

            const steps = [];
            steps.push(`\\[\\text{Given equation: } \\frac{dy}{dx} + (${P})y = ${Q}\\]`);
            steps.push(`\\[\\text{Step 1: } P(x) = ${P},\\; Q(x) = ${Q}\\]`);

            if (Math.abs(P) < 1e-10) {
                steps.push('\\[\\text{Step 2: } \\mu(x)=e^{\\int 0\\,dx}=1\\]');
                steps.push(`\\[\\text{Step 3: Equation becomes } \\frac{dy}{dx} = ${Q}\\]`);
                steps.push(`\\[\\text{Step 4: Integrate both sides } \\Rightarrow y = ${Q}x + C\\]`);

                generalEl.innerHTML = `\\[\\text{General Solution: } y = ${Q}x + C\\]`;

                if (hasX0 && hasY0) {
                    const C = y0 - Q * x0;
                    particularEl.innerHTML = `\\[\\text{Using } y(${x0})=${y0}:\\; C=${C.toFixed(4)}\\;\\Rightarrow\\; y=${Q}x + ${C.toFixed(4)}\\]`;
                } else {
                    particularEl.innerHTML = '\\[\\text{No initial condition given, so } C \\text{ remains arbitrary.}\\]';
                }
            } else {
                steps.push(`\\[\\text{Step 2: Integrating factor } \\mu(x)=e^{\\int ${P}\\,dx}=e^{${P}x}\\]`);
                steps.push(`\\[\\text{Step 3: Multiply through } \\Rightarrow e^{${P}x}\\frac{dy}{dx} + ${P}e^{${P}x}y = ${Q}e^{${P}x}\\]`);
                steps.push(`\\[\\text{Step 4: Left side is } \\frac{d}{dx}\\left(e^{${P}x}y\\right),\\; \\text{so}\\; \\frac{d}{dx}\\left(e^{${P}x}y\\right)= ${Q}e^{${P}x}\\]`);
                steps.push(`\\[\\text{Step 5: Integrate } \\Rightarrow e^{${P}x}y = \\frac{${Q}}{${P}}e^{${P}x} + C\\]`);
                steps.push(`\\[\\text{Step 6: Divide by } e^{${P}x} \\Rightarrow y = \\frac{${Q}}{${P}} + Ce^{-${P}x}\\]`);

                const qp = Q / P;
                generalEl.innerHTML = `\\[\\text{General Solution: } y = ${qp.toFixed(4)} + Ce^{-${P}x}\\]`;

                if (hasX0 && hasY0) {
                    const C = (y0 - qp) * Math.exp(P * x0);
                    particularEl.innerHTML = `\\[\\text{Using } y(${x0})=${y0}:\\; C = \\left(${y0} - ${qp.toFixed(4)}\\right)e^{${P}\\cdot ${x0}} = ${C.toFixed(4)}\\]` +
                        `\\[\\text{Particular Solution: } y = ${qp.toFixed(4)} + ${C.toFixed(4)}e^{-${P}x}\\]`;
                } else {
                    particularEl.innerHTML = '\\[\\text{No initial condition given, so } C \\text{ remains arbitrary.}\\]';
                }
            }

            stepsEl.innerHTML = steps.map(step => `<div class="math-display mt-2">${step}</div>`).join('');
            resultContainer.style.display = 'block';

            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise().then(() => {
                    console.log('First-order LDE MathJax rendered');
                });
            }
        }
        
        // Load application state from localStorage
        function loadState() {
            const savedScore = localStorage.getItem('lde_quiz_score');
            const savedLevel = localStorage.getItem('lde_user_level');
            const savedPage = localStorage.getItem('lde_current_page');
            
            if (savedScore) AppState.quizScore = parseInt(savedScore);
            if (savedLevel) AppState.userLevel = savedLevel;
            if (savedPage) AppState.currentPage = savedPage;
            
            // Determine user level based on score
            if (AppState.quizScore >= 0 && AppState.quizScore <= 2) {
                AppState.userLevel = 'beginner';
            } else if (AppState.quizScore >= 3 && AppState.quizScore <= 4) {
                AppState.userLevel = 'intermediate';
            } else if (AppState.quizScore === 5) {
                AppState.userLevel = 'advanced';
            }
        }
        
        // Save application state to localStorage
        function saveState() {
            localStorage.setItem('lde_quiz_score', AppState.quizScore);
            localStorage.setItem('lde_user_level', AppState.userLevel);
            localStorage.setItem('lde_current_page', AppState.currentPage);
        }
        
        // Set up navigation between pages
        function setupNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get the page from data attribute
                    const page = this.getAttribute('data-page');
                    
                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Render the new page
                    renderPage(page);
                    
                    // Close mobile menu if open
                    const sidebar = document.getElementById('sidebar');
                    sidebar.classList.remove('open');
                });
            });
        }
        
        // Set up mobile hamburger menu
        function setupMobileMenu() {
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const sidebar = document.getElementById('sidebar');
            
            if (hamburgerBtn) {
                hamburgerBtn.addEventListener('click', function() {
                    sidebar.classList.toggle('open');
                });
            }
            
            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', function(e) {
                const isMobile = window.innerWidth <= 768;
                if (isMobile && !sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            });
        }
        
        // Set up practice question hints
        function setupPracticeHints() {
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('hint-btn')) {
                    const hintId = e.target.getAttribute('data-hint');
                    const hintBox = document.getElementById(`hint-${hintId}`);
                    
                    if (hintBox.classList.contains('show')) {
                        hintBox.classList.remove('show');
                        e.target.textContent = 'Show Hint';
                    } else {
                        hintBox.classList.add('show');
                        e.target.textContent = 'Hide Hint';
                    }
                }
            });
        }
        
        // Set up feedback form
        function setupFeedbackForm() {
            const feedbackForm = document.getElementById('feedbackForm');
            const successMessage = document.getElementById('successMessage');
            
            if (feedbackForm) {
                feedbackForm.addEventListener('submit', function(e) {
                    e.preventDefault(); // Prevent default form submission
                    
                    const formData = new FormData(this);
                    
                    // Validate required fields
                    const name = document.getElementById('studentName').value.trim();
                    const rollNo = document.getElementById('rollNumber').value.trim();
                    const message = document.getElementById('message').value.trim();
                    
                    if (!name || !rollNo || !message) {
                        alert('Please fill in all required fields: Name, Roll Number, and Feedback Message.');
                        return;
                    }
                    
                    // Show success message immediately
                    successMessage.classList.add('show');
                    
                    // Submit form data to Formspree
                    fetch(this.action, {
                        method: this.method,
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            // Clear the form
                            this.reset();
                            
                            // Hide success message after 5 seconds
                            setTimeout(() => {
                                successMessage.classList.remove('show');
                            }, 5000);
                            
                            console.log('Feedback submitted successfully to Formspree');
                        } else {
                            throw new Error('Form submission failed');
                        }
                    })
                    .catch(error => {
                        console.error('Error submitting feedback:', error);
                        alert('There was an error submitting your feedback. Please try again.');
                        successMessage.classList.remove('show');
                    });
                });
            }
        }
        
        // Set up quiz functionality
        function setupQuiz() {
            // Set up quiz navigation buttons
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const retakeBtn = document.getElementById('retakeBtn');
            
            if (prevBtn) prevBtn.addEventListener('click', showPreviousQuestion);
            if (nextBtn) nextBtn.addEventListener('click', showNextQuestion);
            if (retakeBtn) retakeBtn.addEventListener('click', resetQuiz);
            
            // Initialize the quiz
            renderQuizQuestion();
        }
        
        // Render the current page based on page ID
        function renderPage(pageId) {
            // Update state
            AppState.currentPage = pageId;
            saveState();
            
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.add('hidden'));
            
            // Show the requested page
            const targetPage = document.getElementById(`${pageId}-page`);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                
                // If it's the quiz page and quiz is completed, show results
                if (pageId === 'quiz' && AppState.quizCompleted) {
                    showQuizResults();
                }
            }
            
            // Trigger MathJax to render equations on the new page
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise().then(() => {
                    console.log(`MathJax rendered for ${pageId} page`);
                }).catch((err) => {
                    console.log('MathJax error:', err);
                });
            }
        }
        
        // Render the current quiz question
        function renderQuizQuestion() {
            const questionData = QuizQuestions[AppState.currentQuestion];
            const quizContent = document.getElementById('quizContent');
            
            if (!questionData) return;
            
            // Update progress indicators
            document.getElementById('progressText').textContent = `Question ${AppState.currentQuestion + 1} of ${QuizQuestions.length}`;
            document.getElementById('quizProgress').style.width = `${((AppState.currentQuestion) / QuizQuestions.length) * 100}%`;
            
            // Build question HTML
            let optionsHTML = '';
            questionData.options.forEach((option, index) => {
                const isSelected = AppState.userAnswers[AppState.currentQuestion] === index;
                const isCorrect = index === questionData.correct;
                const isIncorrect = AppState.userAnswers[AppState.currentQuestion] !== undefined && 
                                   AppState.userAnswers[AppState.currentQuestion] === index && 
                                   index !== questionData.correct;
                
                let optionClass = 'option';
                if (isSelected) optionClass += ' selected';
                if (AppState.quizCompleted && isCorrect) optionClass += ' correct';
                if (isIncorrect) optionClass += ' incorrect';
                
                optionsHTML += `
                    <div class="${optionClass}" data-index="${index}">
                        ${option}
                    </div>
                `;
            });
            
            // Determine if explanation should be shown
            const explanationClass = AppState.userAnswers[AppState.currentQuestion] !== undefined ? 'show' : '';
            
            quizContent.innerHTML = `
                <div class="question-text">${questionData.question}</div>
                <div class="options-container" id="optionsContainer">
                    ${optionsHTML}
                </div>
                <div class="explanation-box ${explanationClass}" id="explanationBox">
                    <div class="explanation-title">Explanation:</div>
                    <p>${questionData.explanation}</p>
                </div>
            `;
            
            // Set up option selection
            document.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', function() {
                    if (AppState.quizCompleted) return;
                    
                    const selectedIndex = parseInt(this.getAttribute('data-index'));
                    selectOption(selectedIndex);
                });
            });
            
            // Update navigation buttons
            document.getElementById('prevBtn').disabled = AppState.currentQuestion === 0;
            
            if (AppState.currentQuestion === QuizQuestions.length - 1) {
                document.getElementById('nextBtn').textContent = 'Submit';
            } else {
                document.getElementById('nextBtn').textContent = 'Next';
            }
            
            // If this is the last question and all are answered, change button to "View Results"
            const allAnswered = AppState.userAnswers.filter(a => a !== undefined).length === QuizQuestions.length;
            if (AppState.currentQuestion === QuizQuestions.length - 1 && allAnswered) {
                document.getElementById('nextBtn').textContent = 'View Results';
            }
            
            // Trigger MathJax to render equations - FIXED
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise().then(() => {
                    console.log('MathJax rendered quiz question');
                }).catch((err) => {
                    console.log('MathJax error:', err);
                });
            }
        }
        
        // Handle option selection in quiz
        function selectOption(optionIndex) {
            // Save the answer
            AppState.userAnswers[AppState.currentQuestion] = optionIndex;
            
            // Update UI to show selected option
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            document.querySelector(`.option[data-index="${optionIndex}"]`).classList.add('selected');
            
            // Show explanation
            document.getElementById('explanationBox').classList.add('show');
            
            // If this is the last question, update button text
            if (AppState.currentQuestion === QuizQuestions.length - 1) {
                document.getElementById('nextBtn').textContent = 'View Results';
            }

            // Re-render MathJax to ensure explanation equations are displayed - ADDED
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise();
            }
        }
        
        // Show the next quiz question
        function showNextQuestion() {
            // If on last question and all are answered, show results
            const allAnswered = AppState.userAnswers.filter(a => a !== undefined).length === QuizQuestions.length;
            
            if (AppState.currentQuestion === QuizQuestions.length - 1 && allAnswered) {
                calculateQuizScore();
                showQuizResults();
                return;
            }
            
            // Otherwise, go to next question
            if (AppState.currentQuestion < QuizQuestions.length - 1) {
                AppState.currentQuestion++;
                renderQuizQuestion();
            }
        }
        
        // Show the previous quiz question
        function showPreviousQuestion() {
            if (AppState.currentQuestion > 0) {
                AppState.currentQuestion--;
                renderQuizQuestion();
            }
        }
        
        // Calculate the quiz score
        function calculateQuizScore() {
            let score = 0;
            
            QuizQuestions.forEach((question, index) => {
                if (AppState.userAnswers[index] === question.correct) {
                    score++;
                }
            });
            
            AppState.quizScore = score;
            AppState.quizCompleted = true;
            
            // Determine user level based on score
            if (score >= 0 && score <= 2) {
                AppState.userLevel = 'beginner';
            } else if (score >= 3 && score <= 4) {
                AppState.userLevel = 'intermediate';
            } else if (score === 5) {
                AppState.userLevel = 'advanced';
            }
            
            // Save state
            saveState();
            
            // Update user level display
            updateUserLevelDisplay();
            
            return score;
        }
        
        // Show quiz results
        function showQuizResults() {
            // Hide quiz interface
            document.getElementById('quizContent').classList.add('hidden');
            document.querySelector('.quiz-controls').classList.add('hidden');
            document.querySelector('.quiz-header').classList.add('hidden');
            document.querySelector('.progress-bar').classList.add('hidden');
            
            // Show results container
            document.getElementById('resultsContainer').classList.remove('hidden');
            
            // Calculate score if not already done
            if (!AppState.quizCompleted) {
                calculateQuizScore();
            }
            
            // Update results display
            document.getElementById('scoreValue').textContent = AppState.quizScore;
            document.getElementById('progressText').textContent = `Quiz Completed`;
            document.getElementById('quizProgress').style.width = '100%';
            
            // Set result title and description based on score
            let resultTitle = '';
            let resultDescription = '';
            
            if (AppState.quizScore <= 2) {
                resultTitle = 'Your Level: Beginner';
                resultDescription = 'Focus on foundational concepts of differential equations. Review integrating factor method and characteristic equations.';
            } else if (AppState.quizScore <= 4) {
                resultTitle = 'Your Level: Intermediate';
                resultDescription = 'You have a good grasp of core concepts. Focus on applications and advanced problem-solving techniques.';
            } else {
                resultTitle = 'Your Level: Advanced';
                resultDescription = 'Excellent understanding. Explore advanced applications and complex problem-solving strategies.';
            }
            
            document.getElementById('resultTitle').textContent = resultTitle;
            document.getElementById('resultDescription').textContent = resultDescription;
            
            // Update score circle color based on score
            const scoreCircle = document.getElementById('scoreCircle');
            if (AppState.quizScore <= 2) {
                scoreCircle.style.background = 'linear-gradient(135deg, var(--blue) 0%, var(--blue-light) 100%)';
            } else if (AppState.quizScore <= 4) {
                scoreCircle.style.background = 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)';
            } else {
                scoreCircle.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)';
            }
            
            // Generate learning path
            generateLearningPath();

            // Re-render MathJax for results page - ADDED
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise();
            }
        }
        
        // Generate learning path based on score
        function generateLearningPath() {
            const pathData = LearningPaths[AppState.userLevel];
            const pathContainer = document.getElementById('pathRecommendation');
            
            if (!pathData || !pathContainer) return;
            
            let pathHTML = `
                <h4 class="font-bold mb-2">${pathData.title}</h4>
                <p class="mb-4">${pathData.description}</p>
                <div class="week-plan">
            `;
            
            // Add each week's plan
            pathData.weeks.forEach((week, index) => {
                pathHTML += `
                    <div class="mt-4 mb-6">
                        <h4 class="font-bold text-blue mb-2">${week.title}</h4>
                        <ul class="week-topics" style="list-style-type: disc; padding-left: 1.5rem;">
                `;
                
                week.topics.forEach(topic => {
                    pathHTML += `<li class="mb-1">${topic}</li>`;
                });
                
                pathHTML += `
                        </ul>
                    </div>
                `;
            });
            
            pathHTML += `</div>`;
            
            pathContainer.innerHTML = pathHTML;

            // Re-render MathJax 
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise();
            }
        }
        
        // Reset the quiz
        function resetQuiz() {
            AppState.currentQuestion = 0;
            AppState.userAnswers = [];
            AppState.quizCompleted = false;
            
            // Hide results container
            document.getElementById('resultsContainer').classList.add('hidden');
            
            // Show quiz interface
            document.getElementById('quizContent').classList.remove('hidden');
            document.querySelector('.quiz-controls').classList.remove('hidden');
            document.querySelector('.quiz-header').classList.remove('hidden');
            document.querySelector('.progress-bar').classList.remove('hidden');
            
            // Reset UI
            renderQuizQuestion();

            // Re-render MathJax 
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise();
            }
        }
        
        // Update the user level display in the sidebar
        function updateUserLevelDisplay() {
            const userLevelElement = document.getElementById('userLevel');
            if (userLevelElement) {
                userLevelElement.textContent = AppState.userLevel.charAt(0).toUpperCase() + AppState.userLevel.slice(1);
                
                // Update color based on level
                if (AppState.userLevel === 'beginner') {
                    userLevelElement.style.backgroundColor = '#3b82f6';
                } else if (AppState.userLevel === 'intermediate') {
                    userLevelElement.style.backgroundColor = '#10b981';
                } else {
                    userLevelElement.style.backgroundColor = '#8b5cf6';
                }
            }
        }
        
        // Initialize the application when DOM is loaded
        document.addEventListener('DOMContentLoaded', initApp);
        
        // Handle window resize for responsive behavior
        window.addEventListener('resize', function() {
            // Close sidebar on mobile when resizing to desktop
            if (window.innerWidth > 768) {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.remove('open');
            }
        });