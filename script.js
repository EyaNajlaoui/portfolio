// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');
const downloadCvEn = document.getElementById('downloadCvEn');
// const downloadCvFr = document.getElementById('downloadCvFr');
// const certButtons = document.querySelectorAll('.cert-btn');

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 100
    });
});

// Typing Effect for Hero Name
document.addEventListener('DOMContentLoaded', () => {
    const heroName = document.getElementById('typedName');
    const text = 'Eya Najlaoui';
    let i = 0;
    
    // Ensure the container is empty at start
    heroName.innerHTML = '';
    
    const typeWriter = () => {
        if (i < text.length) {
            heroName.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId === '#home') {
            // Scroll to top for home
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Project Data
const projectData = {
    'sales-forecasting': {
    title: 'Sales Forecasting System',
    description: `
        <div class="project-detail">
            <h3>Project Overview</h3>
            <p>Developed an end-to-end sales forecasting system by extracting and constructing data from MySQL databases. Implemented advanced time series preprocessing techniques including logarithmic transformation and differentiation to stabilize variance and remove trends, followed by machine learning and deep learning models for accurate sales predictions.</p>
            
            <h3>Technologies & Techniques Used</h3>
            <ul>
                <li><strong>Data Extraction:</strong> MySQL database integration and data construction</li>
                <li><strong>Time Series Preprocessing:</strong> Logarithmic transformation, Differentiation</li>
                <li><strong>Machine Learning:</strong> Random Forest, ElasticNet regression</li>
                <li><strong>Deep Learning:</strong> LSTM (Long Short-Term Memory) networks</li>
                <li><strong>Frontend:</strong> Streamlit interactive dashboard</li>
                <li><strong>Data Processing:</strong> Pandas, NumPy, Scikit-learn</li>
                <li><strong>Model Evaluation:</strong> R², RMSE, MAE metrics with cross-validation</li>
            </ul>
            
            <h3>Preprocessing Pipeline</h3>
            <ul>
                <li><strong>Logarithmic Transformation:</strong> Applied to stabilize variance and handle multiplicative patterns</li>
                <li><strong>Differencing:</strong> Used to remove trends and achieve stationarity in time series</li>
                <li><strong>Feature Engineering:</strong> Created lag features, rolling statistics, and seasonal indicators</li>
                <li><strong>Data Scaling:</strong> Standardization for model convergence and performance</li>
            </ul>
            
            <h3>Key Features</h3>
            <ul>
                <li>End-to-end data pipeline from MySQL extraction to prediction</li>
                <li>Advanced time series preprocessing with log transform and differencing</li>
                <li>Multiple model comparison (ElasticNet, Random Forest, LSTM)</li>
                <li>Comprehensive evaluation using R², RMSE, and MAE metrics</li>
                <li>Interactive Streamlit dashboard</li>
                <li>Hyperparameter optimization and cross-validation</li>
                <li>Forecast confidence intervals and uncertainty quantification</li>
            </ul>
            
            <h3>Results</h3>
            <p>The system achieved high predictive accuracy with R² scores above 0.90 on test data. The logarithmic transformation effectively stabilized variance, while differencing removed underlying trends. LSTM models showed superior performance for capturing complex temporal patterns, while Random Forest provided robust baseline predictions with interpretable results.</p>
        </div>
    `
},
    'network-attack': {
    title: 'Multi-class Network Attack Detection System',
    description: `
        <div class="project-detail">
            <h3>Project Overview</h3>
            <p>Developed a comprehensive multi-class network intrusion detection system using the CICIDS 2017 dataset. Implemented advanced sampling techniques including SMOTE and undersampling to handle extreme class imbalance, achieving high detection accuracy across different attack types.</p>
            
            <h3>Dataset & Preprocessing</h3>
            <ul>
                <li><strong>Dataset:</strong> CICIDS 2017 with 80+ network traffic features</li>
                <li><strong>Original Classes:</strong> Benign + 14 attack categories</li>
                <li><strong>Class Grouping:</strong> Consolidated into 7 classes based on attack type similarity</li>
                <li><strong>Class Imbalance:</strong> Severe imbalance between benign and attack traffic</li>
                <li><strong>Data Cleaning:</strong> Missing value handling, duplicate removal, feature normalization</li>
            </ul>
            
            <h3>Techniques & Methodology</h3>
            <ul>
                <li><strong>Class Imbalance Handling:</strong> 
                    <ul>
                        <li>SMOTE (Synthetic Minority Oversampling Technique) for minority attack classes</li>
                        <li>Random Undersampling for majority benign class</li>
                        <li>Stratified train-test split (80-20)</li>
                    </ul>
                </li>
                <li><strong>Feature Processing:</strong>
                    <ul>
                        <li>Correlation analysis to identify and remove highly correlated features (>0.95)</li>
                        <li>Feature scaling using StandardScaler</li>
                        <li>Attack type grouping based on behavioral similarity</li>
                    </ul>
                </li>
                <li><strong>Machine Learning Models:</strong>
                    <ul>
                        <li>Gaussian Naive Bayes (baseline model)</li>
                        <li>Random Forest with hyperparameter tuning</li>
                        <li>LSTM (Long Short-Term Memory) networks for sequence learning</li>
                    </ul>
                </li>
                <li><strong>Model Evaluation:</strong>
                    <ul>
                        <li>Accuracy, Precision, Recall, F1-Score</li>
                        <li>Confusion matrix analysis</li>
                        <li>Per-class performance metrics</li>
                    </ul>
                </li>
                <li><strong>Tools & Libraries:</strong> Scikit-learn, Imbalanced-learn, TensorFlow/Keras, Pandas, NumPy, Matplotlib, Seaborn</li>
            </ul>
            
            <h3>Attack Class Grouping Strategy</h3>
            <p>Original 14 attack types were grouped into 7 categories based on:</p>
            <ul>
                <li>Similar attack vectors and methodologies</li>
                <li>Common behavioral patterns</li>
                <li>Network impact similarity</li>
                <li>Feature correlation analysis</li>
            </ul>
            
            <h3>Results & Performance</h3>
            <ul>
                <li><strong>Overall Accuracy:</strong> 94% with optimized Random Forest</li>
                <li><strong>Attack Detection Rate:</strong> High recall for critical attack categories</li>
                <li><strong>Best Performing Model:</strong> Random Forest outperformed both Gaussian Naive Bayes and LSTM</li>
                <li><strong>Class-wise Performance:</strong> Consistent F1-scores across all 7 attack categories</li>
                <li><strong>Sampling Impact:</strong> SMOTE + Undersampling improved minority class detection by 35%</li>
            </ul>
            
            <h3>Key Insights</h3>
            <ul>
                <li>Random Forest proved most effective for this network traffic classification task</li>
                <li>Feature correlation analysis helped reduce dimensionality without performance loss</li>
                <li>Attack type grouping improved model interpretability and practical utility</li>
                <li>Proper class balancing was crucial for detecting rare attack types</li>
            </ul>
            
            <h3>Potential Applications</h3>
            <p>This system can be integrated into network monitoring tools for:</p>
            <ul>
                <li>Enterprise network security monitoring</li>
                <li>Intrusion Detection Systems (IDS)</li>
                <li>Network traffic analysis dashboards</li>
                <li>Security Operations Center (SOC) tools</li>
            </ul>
        </div>
    `
},
    'predictive-maintenance': {
        title: 'ML Reliability for Engines (Predictive Maintenance)',
        description: `
            <div class="project-detail">
                <h3>Project Overview</h3>
                <p>Developed a predictive maintenance system for aircraft engines using NASA C-MAPSS dataset with regime segmentation and remaining useful life (RUL) prediction.</p>
                
                <h3>Technologies Used</h3>
                <ul>
                    <li><strong>Clustering:</strong> K-means for operating regime segmentation</li>
                    <li><strong>Survival Analysis:</strong> Lifelines, Weibull, Kaplan-Meier, Cox</li>
                    <li><strong>Machine Learning:</strong> Binary classification for engine health status</li>
                    <li><strong>Prediction:</strong> Regression models for remaining useful life (RUL)</li>
                    <li><strong>Dataset:</strong> NASA C-MAPSS with data from 21 sensors</li>
                </ul>
                
                <h3>Methodology</h3>
                <ul>
                    <li>Automatic segmentation of operating regimes from 21 sensors using K-means</li>
                    <li>Predictive maintenance model to classify healthy vs critical engines</li>
                    <li>Remaining useful life (RUL) prediction for engine failure anticipation</li>
                    <li>Comprehensive performance evaluation and validation</li>
                </ul>
                
                <h3>Results</h3>
                <ul>
                    <li>30% improvement in early anomaly detection</li>
                    <li>Prediction of 100+ failure cycles with RMSE < 20</li>
                    <li>Accurate classification of healthy vs critical engines</li>
                    <li>Robust RUL prediction for proactive maintenance</li>
                </ul>
                
                <h3>Impact</h3>
                <p>The system enables proactive maintenance reducing downtime and optimizing equipment maintenance schedules.</p>
            </div>
        `
    },
    'anomaly-detection': {
        title: 'Tunisian Trade Anomaly Detection and Analysis',
        description: `
            <div class="project-detail">
                <h3>Project Overview</h3>
                <p>Developed a comprehensive system for analyzing and detecting anomalies in Tunisian foreign trade data using web scraping and machine learning techniques.</p>
                
                <h3>Technologies Used</h3>
                <ul>
                    <li><strong>Web Scraping:</strong> Data extraction from INS website (2023-2025)</li>
                    <li><strong>NLP:</strong> SpaCy, NLTK, SentenceTransformer for entity extraction</li>
                    <li><strong>Machine Learning:</strong> Isolation Forest for anomaly detection</li>
                    <li><strong>Frontend:</strong> Streamlit for user interface</li>
                    <li><strong>Reporting:</strong> Automated PDF report generation</li>
                </ul>
                
                <h3>Key Features</h3>
                <ul>
                    <li>Automated extraction of foreign trade data</li>
                    <li>Entity identification (countries, economic sectors)</li>
                    <li>Detection of unusual import/export variations</li>
                    <li>Interactive interface for data analysis</li>
                    <li>Detailed PDF report generation</li>
                </ul>
                
                <h3>Results</h3>
                <p>The system effectively identified anomalies in commercial data and generated automated reports for strategic analysis, providing valuable insights for trade monitoring.</p>
            </div>
        `
    },
    'fraud-detection': {
        title: 'Financial Fraud Detection and Risk Management',
        description: `
            <div class="project-detail">
                <h3>Project Overview</h3>
                <p>Implemented an advanced financial fraud detection system on IEEE-CIS Fraud Detection dataset with cross-validation and interactive dashboard.</p>
                
                <h3>Technologies Used</h3>
                <ul>
                    <li><strong>Data Processing:</strong> Pandas, Scikit-learn for preprocessing</li>
                    <li><strong>Machine Learning:</strong> 3-fold cross-validation</li>
                    <li><strong>Preprocessing:</strong> Imputation, normalization, encoding</li>
                    <li><strong>Visualization:</strong> Streamlit for interactive dashboard</li>
                    <li><strong>Models:</strong> Binary classification for fraud detection</li>
                </ul>
                
                <h3>Methodology</h3>
                <ul>
                    <li>Comprehensive preprocessing of financial data</li>
                    <li>Implementation of classification models</li>
                    <li>Rigorous validation with cross-validation</li>
                    <li>Risk transaction visualization</li>
                    <li>Model performance optimization</li>
                </ul>
                
                <h3>Results</h3>
                <ul>
                    <li>High accuracy in detecting fraudulent transactions</li>
                    <li>Significant reduction in false positives</li>
                    <li>Interactive risk monitoring dashboard</li>
                    <li>Real-time transaction analysis capabilities</li>
                </ul>
                
                <h3>Impact</h3>
                <p>The system provides robust financial fraud detection with high accuracy rates, significantly improving financial security and risk management.</p>
            </div>
        `
    },
    'movie-recommendation': {
        title: 'Movie Recommendation System',
        description: `
            <div class="project-detail">
                <h3>Project Overview</h3>
                <p>Built a comprehensive movie recommendation web application that provides personalized movie suggestions based on user preferences and viewing history. The system integrates real-time movie data and advanced recommendation algorithms.</p>
                
                <h3>Technologies Used</h3>
                <ul>
                    <li><strong>Backend:</strong> Flask (Python web framework)</li>
                    <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
                    <li><strong>Database:</strong> SQLite for user data storage</li>
                    <li><strong>API Integration:</strong> TMDB (The Movie Database) API</li>
                    <li><strong>ML Algorithms:</strong> TF-IDF, Cosine Similarity</li>
                </ul>
                
                <h3>Key Features</h3>
                <ul>
                    <li>User authentication and profile management</li>
                    <li>Advanced movie search functionality</li>
                    <li>Personalized recommendations based on user preferences</li>
                    <li>Favorites, watchlist, and watched lists management</li>
                    <li>Real-time movie data from TMDB API</li>
                    <li>Responsive dark-themed user interface</li>
                    <li>Movie ratings and reviews system</li>
                </ul>
                
                <h3>Recommendation Algorithm</h3>
                <p>The system uses a hybrid approach combining:</p>
                <ul>
                    <li><strong>Content-based filtering:</strong> TF-IDF vectorization of movie features</li>
                    <li><strong>Similarity matching:</strong> Cosine similarity for finding similar movies</li>
                    <li><strong>User behavior analysis:</strong> Based on viewing history and ratings</li>
                </ul>
                
                <h3>Technical Implementation</h3>
                <ul>
                    <li>RESTful API design for frontend-backend communication</li>
                    <li>Secure user session management</li>
                    <li>Optimized database queries for fast response times</li>
                    <li>Responsive design for mobile and desktop compatibility</li>
                </ul>
            </div>
        `
    }
};

// Project box click handlers
const projectBoxes = document.querySelectorAll('.project-box');

projectBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const projectKey = box.getAttribute('data-project');
        const project = projectData[projectKey];
        
        if (project) {
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                ${project.description}
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Add event listener for project buttons
const projectButtons = document.querySelectorAll('.project-btn-box');
projectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent box click event
        const box = btn.closest('.project-box');
        const projectKey = box.getAttribute('data-project');
        const project = projectData[projectKey];
        
        if (project) {
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                ${project.description}
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal functionality
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



// Certification links functionality 
certButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const certLink = button.getAttribute('data-link');
        
        if (certLink) {
            window.open(certLink, '_blank');
        }
    });
});

// Certification links data
const certificationLinks = {
    'Python for Finance': 'https://learn.365datascience.com/certificates/CC-40E1C7C753',
    'Azure AI Fundamentals': 'https://www.credly.com/badges/1e5b75c7-cc59-465b-8a5c-7bbd763ece99/public_url',
    'Deep Learning Fundamentals': 'https://learn.nvidia.com/certificates?id=b1885591d9e24ca4a7267c41aa1de2ff',
    'Machine Learning': 'https://www.coursera.org/account/accomplishments/verify/D3NBAAYNZQXN',
    'Databases and SQL for Data Science': 'https://www.coursera.org/account/accomplishments/verify/DQPBAKBL7C4W',
    'Data Analysis with Python': 'https://www.coursera.org/account/accomplishments/verify/BTX5659LDQFB',
    'Python Project for Data Science': 'https://www.coursera.org/account/accomplishments/verify/V586EBX4E5H9',
    'Data Science Methodology': 'https://www.coursera.org/account/accomplishments/verify/XHHSQDVXPKW3',
    'Python for Data Science, AI & Development': 'https://www.coursera.org/account/accomplishments/verify/EQ4N2YY5QXFP'
};

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-box, .certification-card, .education-box, .experience-card, .contact-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 11, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 11, 0.95)';
    }
});

// Skills hover effect enhancement
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Add scroll progress indicator
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ec4899, #c026d3);
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Console welcome message
console.log(`
%c🚀 Welcome to Eya Najlaoui's Portfolio! 
%cThanks for checking out the code. 
Feel free to reach out if you have any questions!

LinkedIn: https://www.linkedin.com/in/eya-najlaoui
GitHub: https://github.com/EyaNajlaoui
Email: eya.najlaouii@gmail.com
Phone: +216 99 562 445
`, 
'color: #ec4899; font-size: 16px; font-weight: bold;',
'color: #a1a1aa; font-size: 14px;'
);