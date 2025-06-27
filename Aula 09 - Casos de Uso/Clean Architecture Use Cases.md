https://nanosoft.co.za/blog/post/clean-architecture-use-cases?authuser=2

Clean Architecture: Use Cases
Paul Allies
Feb 19, 2023
What is a use case?
In Clean Architecture, a use case is a piece of business logic that represents a single task that the system needs to perform. The use case encapsulates the rules and logic required to perform the task, and defines the inputs and outputs required for the operation.

The use case is typically implemented as a standalone module (class or function), which is responsible for coordinating the flow of data between different layers of the system, such as the domain layer and the presentation layer. The use case is often triggered by a user action (clicking of a button) or an event (API call) in the system, and can result in changes to the state of the system or the data that is stored or retrieved.

Here's an example of a use case:

// File: AddToCartUseCase.swift

protocol AddToCartUseCase {
    func execute(product: Product, quantity: Int)
}

class AddToCartUseCaseImpl: AddToCartUseCase {
    
    private let cartRepository: CartRepository
    
    init(cartRepository: CartRepository) {
        self.cartRepository = cartRepository
    }
    
    func execute(product: Product, quantity: Int) {
        var cart = cartRepository.getCart()
        let cartItem = CartItem(product: product, quantity: quantity)
        cart.items.append(cartItem)
        cartRepository.saveCart(cart: cart)
    }
}

The example is in Swift, but you can use the same basic concept in other programming languages too

By using use cases to encapsulate the business logic of the system, we can make the code more modular, testable, and maintainable, as the use cases can be easily tested and modified without affecting other parts of the system. Use cases also help to separate the business logic from the implementation details, such as the user interface or the data storage, which can make the code more adaptable and flexible.

A use case is a cohesive module or component has a clear and well-defined purpose or responsibility, and all of its elements are closely related to that purpose. In other words, the elements in a use case should work together towards a single goal or task, without having to rely on elements outside of the module or component.

This helps to reduce the complexity of the system, by breaking it down into smaller, more manageable parts.

Where should a use case be placed?
Use cases typically live in the domain layer, which contains the business rules and logic that are independent of any specific technology or framework.

The domain layer is responsible for representing the business concepts and entities of the system, and defining the use cases and operations that can be performed on those entities. The use cases in the domain layer encapsulate the specific business rules and logic required to perform the operation, and define the inputs and outputs required for the operation.

The domain layer is often implemented as a set of classes, interfaces, or functions that represent the business concepts and use cases, and is generally isolated from the presentation layer and the data layer. The use cases in the domain layer should not have any direct knowledge of the user interface or the specific data storage mechanism, but should instead communicate with these layers through well-defined interface contracts.

By keeping the use cases in the domain layer, we can make the system more modular, flexible, and adaptable to change. This can also make the code more testable, as the domain layer can be tested independently of the other layers, using mock implementations of the dependencies.

Why should we split use cases into separate files? Can't we just put them all in one module instead?
It's preferred to have use cases as separate files:

Separation of Concerns: The system becomes more flexible and modular, which allows for easier adaptation to changing business needs

Readability: Code is more readable and understandable, as each use case has a clear and well-defined purpose.

Testing: Easier to test, as each use case can be tested independently of the others.

Reusability: They can be more easily reused in other parts of the system, or even in other projects. This improves overall efficiency and maintainability.

Flexibility: Each use case can be modified or extended without affecting other parts of the system.

From where would we invoke use case?
Use cases are typically invoked from the presentation layer. The presentation layer is responsible for handling user input and presenting data to the user (such as a web page, mobile app, or desktop application) as well as any input/output components (such as APIs, messaging systems, or file systems) that are used to interact with the user or other systems.

When a user interacts with the presentation layer, the input is typically passed to the appropriate use case. The use case then performs the required business logic and returns the results.

Conclusion
The use of use cases in software development provides a number of benefits. By encapsulating specific pieces of business logic into individual use cases, the system becomes more modular, flexible, and adaptable to changing business needs.

Use cases can be easily tested and reused in other parts of the system, without having to worry about the specific details of the user interface or data storage.

Use cases help to separate the business logic from the rest of the code, making it easier to manage, test, and modify. Use cases also provide a way to abstract the data access logic from the business logic, which can make the code more flexible and easier to maintain over time.