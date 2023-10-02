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
      description: 'Week 4.',
      plan: [
        { type: 'text', content: '.' },
        { type: 'text', content: '.' },
      ],
      do: [
        { type: 'text', content: '.' },
        
      { type: 'text', content: '.' },
      ],
      check: [{type: 'text', content: '.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: '.'
    },
    {
      title: 'Week 5',
      published: 'October 02, 2023',
      description: 'Week 5.',
      plan: [
        { type: 'text', content: '.' },
        { type: 'text', content: '.' },
      ],
      do: [
        { type: 'text', content: '.' },
        
      { type: 'text', content: '.' },
      ],
      check: [{type: 'text', content: '.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: '.'
    },
    {
      title: 'Week 6',
      published: 'October 09, 2023',
      description: 'Week 6.',
      plan: [
        { type: 'text', content: '.' },
        { type: 'text', content: '.' },
      ],
      do: [
        { type: 'text', content: '.' },
        
      { type: 'text', content: '.' },
      ],
      check: [{type: 'text', content: '.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: '.'
    },
    {
      title: 'Week 7',
      published: 'October 23, 2023',
      description: 'Week 7.',
      plan: [
        { type: 'text', content: '.' },
        { type: 'text', content: '.' },
      ],
      do: [
        { type: 'text', content: '.' },
        
      { type: 'text', content: '.' },
      ],
      check: [{type: 'text', content: '.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: '.'
    },
    {
      title: 'Week 8',
      published: 'October 30, 2023',
      description: 'Week 8.',
      plan: [
        { type: 'text', content: '.' },
        { type: 'text', content: '.' },
      ],
      do: [
        { type: 'text', content: '.' },
        
      { type: 'text', content: '.' },
      ],
      check: [{type: 'text', content: '.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: '.'
    },
    {
      title: 'Week 9',
      published: 'November 06, 2023',
      description: 'Week 9.',
      plan: [
        { type: 'text', content: '.' },
        { type: 'text', content: '.' },
      ],
      do: [
        { type: 'text', content: '.' },
        
      { type: 'text', content: '.' },
      ],
      check: [{type: 'text', content: '.'},
      {type: 'text', content: ''},
      {type: 'text', content: ''}],
      act: '.'
    },
    // Add more weeks data here...
  ];
  