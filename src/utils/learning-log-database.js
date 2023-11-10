export const weeksData = [
    {
      title: 'Week 1',
      published: 'September 04, 2023',
      description: 'The first of the 10 weeks for the C++ for Games course. In this week, I got started with the learning portfolio, creating a game design document for my game and started to learn the basics of C++.',
      plan: [
        { type: 'text', content: 'For this week, my plan is to dive into the course lectures to gain a comprehensive understanding of the course structure and the assignments or tasks that lie ahead.I will start by exploring specific Git commands in the terminal to ensure smooth collaboration and version control.In parallel, I aim to establish a solid foundation in C++ by delving into the basics, covering topics like fundamental data types, various integer and character types, and more. My goal is to master these fundamentals by Friday.' },

      { type: 'text', content: 'I also plan to create my own custom learning portfolio website for this course by the weekend.Additionally, I will embark on outlining a basic game design document for my upcoming 2D game project, all with the aim of getting a strong headstart in the course. Successful completion of these tasks will set a solid foundation for my journey ahead.' },
      ],
      do: [
        { type: 'text', content: 'Throughout this week, I attended the course lectures, gaining valuable insights into the course structure, assignment expectations, and effective goal-setting strategies. I also dedicated time to configuring my Visual Studio C++ developer environment, ensuring a seamless workflow for the course ahead. In parallel, I set up the Modern C++ for Games framework within Visual Studio, which will serve as a crucial tool for my upcoming 2D game project.' },
        
      { type: 'text', content: 'However, in terms of creating my custom learning portfolio website, I encountered some challenges with time management. While I initially spent extra time contemplating the site structure and design, I ultimately opted for a more straightforward approach. This decision, although it simplified the design, did result in some delays, affecting my progress on the game design document.' },
      ],
      check: [{type: 'text', content: 'Overall, this week progressed smoothly, allowing me to grasp the course structure and its requirements effectively. I made solid progress in various areas, including setting up my learning portfolio website, familiarizing myself with the basics of C++, configuring the IDE with the C++ for Games framework, and initiating work on the Game Design Document (GDD). However, I recognize that I could have devoted more time to refining the GDD had I not spent an extended period developing my website. This experience serves as a valuable lesson in balancing project priorities and time management, which I aim to optimize in the upcoming weeks.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: 'From this week, I have realized that time is limited, and I need to use it efficiently for my 2D game project. I will focus on improving my C++ skills and keeping my learning log updated. Starting next week, I will be more careful with my planning and time management to avoid any delays in my work. These lessons will help me work smarter in the upcoming weeks of the course.'
    },
    {
      title: 'Week 2',
      published: 'September 11, 2023',
      description: 'Delving into slightly intermediate topics of C++ such as pointers, arrays, and classes.',
      plan: [
        { type: 'text', content: 'In Week 2, I am determined to strengthen my C++ skills. I will tackle intermediate concepts like classes, arrays, and pointers through lectures and self-study, ensuring a comprehensive grasp. Simultaneously, I am committed to completing the Game Design Document (GDD) by the end of the week.' },
      { type: 'text', content: 'In addition, I will dive deeper into the C++ for Games framework, mapping out the implementation of key game features. I shall experiment with tasks such as opening a window, loading sprites, and exploring sprite animations. To keep myself on track, I have set specific milestones: mastering pointers and arrays by Wednesday and delving into classes by Friday. Throughout the week, I will continue learning about the framework, recognizing its vast potential. These efforts align directly with my ultimate goal of developing a 2D game, marking substantial progress in my game development journey' },
      ],
      do: [
        { type: 'text', content: 'This week, I successfully tackled most of the planned tasks. I managed to complete my Game Design Document (GDD), although I recognize the need for potential revisions in the future. I diligently attended lectures on pointers, arrays, and classes, effectively grasping the fundamental concepts behind these topics as intended. Additionally, I made sure to cover the remaining topics, such as bitwise operators and functions, that were not addressed in the lectures due to time constraints. Armed with this expanded knowledge of C++, I also delved into the C++ for Games framework, exploring its various APIs. During the lecture\'s lab showcase, we navigated opening windows and loading sprites within the framework. I have added the code snippet for opening window and loading sprites below.' },        
      { type: 'text', content: '' },
      { type: 'code', content: `
      #include"Graphics/Window.hpp"
      #include"Graphics/Image.hpp"
      #include"Graphics/Sprite.hpp"
      #include"Graphics/ResourceManager.hpp" //It includes font.hpp   *Transitive Includes*
      #include"Graphics/SpriteAnim.hpp"      //It includes spritesheet.hpp
      #include"Graphics/Timer.hpp"
      
      #include <fmt/core.h>
      
      #include <iostream>
      
      using namespace Graphics;
      
      Window window;
      Image image;
      Sprite sprite;
      
      const int SCREEN_WIDTH = 400;
      const int SCREEN_HEIGHT = 300;
      
      int main()
      {
        auto idleSprites = ResourceManager::loadSpriteSheet("assets/textures/Idle_Sheet.png", 153, 127, 0, 0, BlendMode::AlphaBlend);
        SpriteAnim idleAnim(idleSprites,10.0f);
      
        //Initialization Settings:
        image.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
      
        window.create(L"Mini Assailants", SCREEN_WIDTH,SCREEN_HEIGHT);
        window.show();
        //window.setVSync(false);
      
        Timer timer;
        double      totalTime = 0.0;
        uint64_t    frameCount = 0ull;
        std::string fps = "FPS: 0";
      
        while (window)
        {
          timer.tick();
      
          // Game Logic Here (Update Loop)
      
          idleAnim.update(timer.elapsedSeconds());
      
          image.clear(Color::Black);
      
          // Draw Sprites here (Render Loop)
      
          image.drawSprite(idleAnim, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
      
          image.drawText(Font::Default, fps, 10, 10, Color::White);
      
          window.present(image);
      
          Event event;
          while (window.popEvent(event))
          {
            switch (event.type)
            {
            case Event::Close:
              window.destroy();
              break;
            case Event::KeyPressed:
            {
              switch (event.key.code)
              {
              case KeyCode::Escape:
                window.destroy();
                break;
              }
            }
            }
          }
      
          ++frameCount;
      
          totalTime += timer.elapsedSeconds();
          if (totalTime > 1.0)
          {
            fps = fmt::format("FPS: {:.3f}", static_cast<double>(frameCount) / totalTime);
      
            std::cout << fps << std::endl;
      
            frameCount = 0;
            totalTime = 0.0;
          }
        }
      
        return 0;
      }` },
      ],
      check: [{type: 'text', content: 'In this past week, I successfully completed most of my planned tasks, but I\'m acutely aware that there\'s significant room for improvement. One notable aspect to address is the time management; I aimed to finish my Game Design Document (GDD) during the first week, but it extended beyond that timeframe. This highlights the importance of refining my project planning skills.'},
      {type: 'text', content: 'While I diligently followed the lectures and gained a solid understanding of pointers and classes in C++, I recognize that practical implementation in my game project demands further practice. Similarly, becoming proficient in utilizing the C++ for Games framework will require ongoing dedication and practice.'},
      {type: 'text', content: 'Regarding feedback, I haven\'t yet had the opportunity to provide input to my peers as I\'m still getting acquainted with everyone. However, I did receive valuable feedback on my learning portfolio website from our lecturer, Jeremiah. The initial feedback suggests that the website appears promising and is on the right track. These insights reinforce the importance of constructive feedback and will guide my future website development efforts."'}],
      act: 'Based on my experiences in the past two weeks, I\'ve realized the importance of disciplined actions to succeed in this course and complete the game project. To do this, I\'ll create a daily timetable and use the Pomodoro technique to manage my time efficiently. I\'ll focus on practicing C++ and getting comfortable with the framework. Additionally, I\'ll transition from planning to active coding for my game project. These steps will ensure steady progress in my game development journey.'
    },
    {
      title: 'Week 3',
      published: 'September 18, 2023',
      description: 'Templates, Lambdas, and even more intermediate stuff! ',
      plan: [
        { type: 'text', content: 'For Week 3, I\'ll stick to attending the lectures and dive into some more advanced C++ stuff like Function templates, operator overloading, and lambdas. It might take me about 8 to 12 hours in total to learn and practice these. In terms of the game framework, I want to figure out how to make the player move using input controls. It seems like a pretty straightforward task, and I think I can get it done in around 30 minutes to an hour.' },
        { type: 'text', content: 'I also realize I need more practice with pointers and classes from Week 2. So, I\'ll go over the lectures again, read the chapters about pointers and classes in the \'Beginning C++ 20\' book, and do some online exercises that involve them. I plan to spend at least 1 to 2 hours on this every day this week. With all of these, I aim to become more comfortable with working on my game project.' },
      ],
      do: [
        { type: 'text', content: 'I managed to do what I planned this week. I attended the lectures and learned about Function templates, Lambdas, and operator overloading. I also went back to Week 2 lessons on pointers and classes and read the relevant parts in the \'Beginning C++ 20\' book. I practiced with online exercises for pointers and classes. However, I realized that I need more time for practical applications and exercises on lambdas and templates, just like I did for pointers and classes.' },
        { type: 'text', content: 'In the lab, I gained practical experience with the input system, and I\'ve shared the code snippet below to show what I\'ve learned:' },
        {type: 'code', content:
        `//Player Movement Using Keyboard class and Input class:-
        //----Using Keyboard Class:-------
        #include"Graphics/Keyboard.hpp"
        
         // Initialize player pos in global scope
        float player_X = SCREEN_WIDTH / 2;
        float player_Y = SCREEN_HEIGHT / 2;
        float playerSpeed = 60.0f; //Also initialize the player speed
        
         // In the game loop, in the game-logic/update-loop section:
        
        auto keyState = Keyboard::getState();
        if (keyState.W)
        {
          player_Y -= playerSpeed * timer.elapsedSeconds();
        }
        if (keyState.S)
        {
          player_Y += playerSpeed * timer.elapsedSeconds();
        }
        if (keyState.A)
        {
          player_X -= playerSpeed * timer.elapsedSeconds();
        }
        if (keyState.D)
        {
          player_X += playerSpeed * timer.elapsedSeconds();
        }
        
        // In the draw-sprite/render-loop section:
        image.drawSprite(playerIdleAnim, static_cast<int>(player_X), static_cast<int>(player_Y)); //used the playerPos global variables, with int static_cast
        
        //-------Using Input Class:-------
        #include"Graphics/Input.hpp"
        
        // In game-logic/update-loop section:
        Input::update();
        player_X += Input::getAxis("Horizontal") * playerSpeed * timer.elapsedSeconds();
        player_Y -= Input::getAxis("Vertical") * playerSpeed * timer.elapsedSeconds();
        
        //---Loading Background Image---//
        
        // create image, and sprite in main
        auto backgroundStage1 = ResourceManager::loadImage("assets/textures/stage1.png");
        Sprite bg1Sprite(backgroundStage1);
        
        // draw sprite in the render loop
        image.drawSprite(bg1Sprite, 0, 0); `}
      ],
      check: [{type: 'text', content: 'Things mostly went as planned this week, which is a positive. However, I\'ve noticed that I\'m trying to tackle complex C++ topics as a beginner, which can be overwhelming. I\'ve also realized that I\'ve done minimal work on the game project, mainly involving window setup, sprites, and input. This raises concerns about meeting the project deadline. Regarding feedback, I haven\'t received any yet because there isn\'t much code to review at this stage.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: 'This week, I\'ve learned that practical practice and solving programming exercises are key to understanding complex topics. I\'ve improved my grasp of pointers and classes from Week 2 through practice and plan to do the same for upcoming concepts. To enhance my skills, I\'ll dive deeper into the C++ for Games framework documentation to better implement game features. Most of my time estimates were accurate, but for newer topics, I\'ll dedicate more daily practice time to reinforce my understanding.'
    },
    {
      title: 'Week 4',
      published: 'September 25, 2023',
      description: 'Hallo en welkom to The Standard Template Library',
      plan: [
        { type: 'text', content: 'For Week 4, my plan is to keep attending the lectures and delve into more intermediate C++ topics like R-Value reference, move semantics, and learn about class templates. I also aim to get an introduction to the STL module in C++. This will help me build a solid understanding of these intermediate features in C++ and enable me to write slightly more complex programs.' },
        { type: 'text', content: 'Additionally, I\'m eager to put my knowledge from the previous week into practice by working with classes in my game project. This involves creating a player class and separating it from the main code, which aligns with the standard way of writing C++ applications following Object-Oriented Programming (OOP) principles.' },
        {type: 'text', content: 'I estimate that learning about these newer intermediate C++ topics like move semantics and class templates may take me about 6 hours, and I plan to cover them on Tuesday and Wednesday. Learning the basics of the STL module should take around 1 to 2 hours, which I\'ll do on Thursday.'}
      ],
      do: [
        { type: 'text', content: 'I managed to complete most of my planned tasks for the week, but there were a few exceptions. I attended the lectures as intended and learned about r-value reference and move semantics. However, there wasn\'t a lecture on class templates, so I couldn\'t manage to get the time to explore that topic on my own.' },
        { type: 'text', content: 'In terms of the STL module, I got an introduction through the lectures and also covered some important concepts related to STL containers and iterators, including vectors, arrays, and maps. Additionally, we delved into the handy \'for auto\' loop, which was more extensive than my initial plan for the week.' },
        {type: 'text', content: 'I did spend some time self-studying move semantics, but I couldn\'t dedicate as many hours as I had originally planned. This is something I\'ll need to revisit in the coming weeks. In the lab, we worked on creating a player class together, which I successfully implemented in my game. We also explored collisions in the framework using Axis-Aligned Bounding Box from the math library, a topic I hadn\'t initially planned to cover. I have attached some code snippets from some of my progress this week below.'},
        {type: 'code', content: `// The player class header file
        class Player
        {
        public:
            // Default constructor.
            Player();
        
            explicit Player(const glm::vec2& pos, const Graphics::SpriteAnim& sprite);
        
            void update(float deltaTime);
        
            void draw(Graphics::Image& image);
        
            void setPosition(const glm::vec2& pos);
            const glm::vec2& getPosition() const;
        
            void translate(const glm::vec2& t);
        
            const Math::AABB getAABB() const;
        
        private:
            glm::vec2 position{ 0 };
            glm::vec2 velocity{ 0 };
            float speed{ 60.0f };
            Graphics::SpriteAnim sprite;
            Math::AABB aabb;
        };`},
        {type: 'code', content: `
        // Collision checks using AABB
        auto aabb = player.getAABB();
        glm::vec2 correction{ 0 };
        if (aabb.min.x < 0)
        {
            correction.x = -aabb.min.x;
        }
        if (aabb.min.y < 0)
        {
            correction.y = -aabb.min.y;
        }
        if (aabb.max.x >= image.getWidth())
        {
            correction.x = image.getWidth() - aabb.max.x;
        }
        if (aabb.max.y >= image.getHeight())
        {
            correction.y = image.getHeight() - aabb.max.y;
        }`}
      ],
      check: [{type: 'text', content: 'Consistently attending lectures has been a positive choice. Exploring unexpected topics like STL container types and the collision system in the framework added value to my learning. However, the absence of a class templates lecture and not dedicating enough self-study hours were drawbacks. My game codebase is growing, but I\'m eager for feedback. Yet, most of what I\'ve done aligns with our lab work, so there isn\'t much extra for review at this stage'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: 'In Week 4, the highlight was my introduction to STL, which I believe will play a crucial role in my project, especially when creating groups of enemies using vectors. To improve, I\'ll focus on increasing my self-study hours and practical application of what we\'ve learned. I also realized that my time estimates were a bit off due to insufficient self-study hours. To address this, I\'m thinking of breaking down my self-study into shorter intervals, rather than attempting longer 3 to 6-hour sessions to better absorb new C++ topics introduced in the lectures.'
    },
    {
      title: 'Week 5',
      published: 'October 02, 2023',
      description: 'Progressing on the Game Project.',
      plan: [
        { type: 'text', content: 'For Week 5, my plan is to attend lectures and learn about new topics like Random numbers in C++, date, and time. Additionally, I\'ll revisit some previously taught topics to deepen my understanding. On Monday and Tuesday, I\'ll review slides on lambdas and operator overloading. I\'ll also read about these topics in the Beginning C++ 20 book. I\'ll spend 2 hours on each, revising theory, and another 2 hours doing practical exercises found online. Websites like w3schools and geeksforgeeks offer useful exercises. Alongside this, I\'ll continue building and improving my game during the lab portion of the lectures, dedicating 2 to 3 hours every day to this project, in addition to the time spent on learning and practicing C++ theory.' },
        { type: 'text', content: '' },
      ],
      do: [
        { type: 'text', content: 'I successfully completed many of the planned tasks for the week, including revising operator overloading and lambdas. I also made progress on my game project. While the lectures didn\'t cover the expected topics like random numbers or date and time in C++, we explored ranges and views in C++. In the lab, we learned valuable concepts for our game, such as using state machines, flipping sprites, and implementing inheritance to create a base entity class for players and enemies. My time estimates were more accurate this time, as I allocated a modest amount of hours (around 2 to 3 everyday) for specific tasks, allowing me to achieve what I had planned.' },
        
      { type: 'text', content: 'I am sharing the code snippet below for my entity base class from my game' },
      {type: 'code', content: 
      `
      #include <Camera.hpp>
      #include <Graphics/Image.hpp>
      #include <Math/AABB.hpp>
      
      class Entity
      {
      public:
        virtual ~Entity() = default;
      
        virtual void update(float deltaTime) = 0;
        virtual void draw(Graphics::Image& image,const Camera& camera) = 0;
      
        void setPosition(const glm::vec2& pos) { transform.setPosition(pos); }
        const glm::vec2& getPosition() const { return transform.getPosition(); }
        void translate(const glm::vec2& t) { transform.translate(t); }
        const Math::AABB getAABB() const { return  transform * aabb; }
      
      protected:
        Entity() = default;
        Entity(const glm::vec2& pos, const Math::AABB& _aabb);
      
        Math::AABB aabb;
        Math::Transform2D transform;
      };`}
      ],
      check: [{type: 'text', content: 'Things are going according to plan, and I\'m achieving my goals within the set time frame. I\'ve noticed that in the beginning of the week, I plan to go through some theory during the lectures. However, now that we\'ve progressed, I realize it\'s more efficient to dedicate the entire lecture session to coding. I can then learn about newer theory topics from the slides and the book on my own, which has been an important learning point for me. I didn\'t take too much feedback yet, because most of my code is still based on the learnings from the lab session.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: 'My main takeaway this week is about time management. Dedicating a modest amount of time daily for each task, like reading theory or working on the game, has proven more effective than planning longer hours as I did in previous weeks. Additionally, it\'s become clear that I shouldn\'t solely rely on lectures to learn new theory. Instead, I should use lectures more for getting feedback on my game and focus on reading theory from the slides independently.'
    },
    {
      title: 'Week 6',
      published: 'October 09, 2023',
      description: 'Design Patterns!',
      plan: [
        { type: 'text', content: 'For Week 6, I plan to revisit some past topics like class templates and move semantics, dedicating 3 hours on Monday and Tuesday for a thorough review, including practice exercises. On Wednesday, I\'ll spend 3 hours learning about random numbers and date/time in C++ from the slides and the C++ 20 book. During lectures, I\'ll focus on understanding the covered topics, and in the lab sessions, I aim to seek feedback and enhance my game. I have a goal to develop a custom camera class for my game, and I\'ll discuss this in the lab sessions. Additionally, I\'ll commit at least 2 hours each day to working on my game project.' },
        { type: 'text', content: '' },
      ],
      do: [
        { type: 'text', content: 'I successfully completed all the tasks in my plans for Week 6, and my time estimates turned out to be accurate and achievable for me. I revisited topics like move semantics and class templates as planned and also learned about random numbers in C++ along with the chrono library for date and time. In the lectures, we gained a foundation on the singleton game programming pattern, and during lab sessions, we explored steering behaviors, including learning about vectors and vector math on Thursday, which is valuable for moving objects in our games. Additionally, I successfully implemented a basic camera class for my game.' },
        
      { type: 'code', content: 
      `#include <glm/vec2.hpp>

      class Camera
      {
      public:
        Camera() = default;
      
        explicit Camera(const glm::vec2& pos)
          : position{pos}
        {}
      
        void setPosition(const glm::vec2& pos) { position = pos; }
      
        const glm::vec2& getPosition() const { return position; }
      
        glm::vec2 getViewPosition() const { return -position; }
      
      private:
        glm::vec2 position;
      };` },
      ],
      check: [{type: 'text', content: 'Everything went smoothly this week as I covered various C++ topics independently, not relying solely on lectures. I also communicated in the lab class about the camera needed for my game, allowing me to create the camera class. I received feedback that it was set up properly.'},],
      act: 'With the experiences from previous weeks, I\'ve become better at planning accurately at the start of the week and estimating time correctly. However, I realize I need to improve the pace at which I work on my actual game project. A significant portion of my time in the week is still dedicated to learning C++ topics. With fewer weeks remaining, I need to shift my focus and dedicate more time to my game project.'
    },
    {
      title: 'Week 7',
      published: 'October 23, 2023',
      description: 'My games\' a 2D brawler!',
      plan: [
        { type: 'text', content: 'This week, I aim to shift my focus more towards my game project and reduce the time spent on learning C++ theory. However, I\'ll allocate around 2-3 hours on Monday to learn about smart pointers. The main goal is to enhance the core functionality and add key features to my game project. I plan to dedicate a minimum of 4 hours every day to my game project to ensure progress. Additionally, I\'ll attend lectures, grasp the taught topics, and seek feedback during the lab session. Specifically, I aim to implement a level class to efficiently manage different levels in my game.' },
      ],
      do: [
        { type: 'text', content: 'I successfully learned about smart pointers on Monday, dedicating the planned time. Although I couldn\'t fully commit the intended 4 hours each day to my game project, I still made some progress throughout the week. I actively participated in the lectures covering topics like event queues, circular buffer, and state machine design patterns. During the lab session, I shared my code, sought feedback, and worked on enhancing my game features and code. I successfully implemented a level class as part of my plan.' },
        {type: 'code', content:
      `#include <Background.hpp>
      #include <Camera.hpp>
      #include <Player.hpp>
      
      class Level {
      public:
        Level();
      
        Level(const std::string& backgroundPath, int topEdgeCollision);
      
        void LoadLevelAssets();
        void SetLevel(int levelNumber);
      
        void Update(float deltaTime);
        void Draw(Graphics::Image& image, const glm::vec2& offset);
      
        Player& getPlayer() { return player; }
      
      private:
        Background background;
        Player player;
        std::string backgroundPath;
        int topEdgeCollision;
      };`}
      ],
      check: [{type: 'text', content: 'Things went well this week, and I managed to accomplish my planned tasks. However, I was a bit inconsistent in dedicating the full 4 hours every day to my game project. I received valuable feedback during the lab session, particularly on my code. While the level class was mostly fine, I did make some minor tweaks based on the feedback.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: 'My key takeaway from this week is the need to strictly adhere to my planned schedule and dedicate longer hours each day. Even though I aimed for 4 hours daily, I realized that falls short of the required 40 hours per week for this course. Moving forward, I must commit more time to meet the demands of the project.'
    },
    {
      title: 'Week 8',
      published: 'October 30, 2023',
      description: 'Player and Enemy combat',
      plan: [
        { type: 'text', content: 'With only two weeks left, my focus is fully on the game project. I plan to dedicate 4-5 hours every day to work on it. Specifically, I\'ll invest more effort into refining the player and enemy classes. This involves adding animations to the player class, implementing a state machine for state transitions, ensuring smooth player movement in the game world, and addressing collision checks between the player and the screen edges. These improvements are crucial for a polished final project. I also plan to get feedback during the scheduled sessions on teams.' },
      ],
      do: [
        { type: 'text', content: 'This week went well as I committed significant hours daily to my game project, meeting my planned goals. I focused on enhancing the player class, implementing state machines, and adding animations. Additionally, I attended feedback sessions, allowing my code to be reviewed, and incorporated suggestions for improvement.' },
      ],
      check: [{type: 'text', content: 'I  think this week went really well considering how I was able to have significant progress in my game. I was able to get a lot of feedback on my code during the teams sessions and incorporate many changes to my code according to them to fix various bugs/ issues .'},],
      act: 'With little time left, I\'m working hard on my game project to meet my deadlines. Right now, my main goal is to improve the enemy part of the game and make sure the player and enemies interact smoothly, which is crucial for how the game will play.'
    },
    {
      title: 'Week 9',
      published: 'November 06, 2023',
      description: 'The Final Week~',
      plan: [
        { type: 'text', content: 'As the final week approaches, my plan is to focus on completing all the remaining features of my game. I\'m aiming to dedicate more than 6 hours every day to ensure I finish the core gameplay elements. Specifically, I need to put in extra effort on the enemy class and refine the combat system between the player and the enemy. Gathering feedback during the sessions will be crucial. Additionally, I must include a beginning and end screen in my game to meet the project requirements, ensuring it has a clear start, middle, and end.' },
      ],
      do: [
        { type: 'text', content: 'In the final week, I gave my best effort to bring my game to a deliverable state. Despite having ambitious plans in my initial game design document, such as parallax backgrounds, multiple enemy types, multiple levels, and boss fights, time constraints led to some features being left out. However, I successfully implemented the core mechanic of player-enemy combat. The game loop functions as intended, with the player winning upon defeating the enemy and facing defeat if the enemy prevails.' },
      ],
      check: [{type: 'text', content: 'Looking back at the whole course, I learned a lot about C++ and finished my 2D game project, even though it doesn\'t have many features. That part went well. But I realize I could have done more if I had spent more time in the earlier weeks. I got helpful feedback on my game during the course, and I\'m happy with what I learned.'},],
      act: 'Looking back, I didn\'t estimate time well in the beginning, but I got better later on. Moving forward, I want to improve my C++ skills. For my game, I plan to make the code better, add more enemy types, extra levels, and maybe some pickups. I\'m also thinking of using the game as my BUAS CMGT intake assignment after the further improvements.'
    },
  ];
  