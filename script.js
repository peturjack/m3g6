// Register the ScrollTrigger plugin from the GreenSock Animation Platform (GSAP)
gsap.registerPlugin(ScrollTrigger);

// Convert all elements with the class 'section' to an array and iterate over them
gsap.utils.toArray('.section').forEach(section => {
  // Create a ScrollTrigger for each 'section' element
  ScrollTrigger.create({
    // Set the trigger element for this ScrollTrigger to the current 'section' element
    trigger: section,
    
    // Define when the animation should start relative to the trigger element
    // 'top top' means the animation starts when the top of the trigger element aligns with the top of the viewport
    start: 'top top',
    
    // Pin the 'section' element when it enters the viewport and unpin it when it exits
    pin: true,
    
    // Disable spacing adjustment when pinning (keeps the pinned element at its natural height)
    pinSpacing: false
  });
});


