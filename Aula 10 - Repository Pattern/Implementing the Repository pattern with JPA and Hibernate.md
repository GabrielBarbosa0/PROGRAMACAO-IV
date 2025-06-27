https://thorben-janssen.com/implementing-the-repository-pattern-with-jpa-and-hibernate/?authuser=2


Hibernate Advanced | JPA
Implementing the Repository pattern with JPA and Hibernate
By
Thorben Janssen
Take your skills to the next level!

The Persistence Hub is the place to be for every Java developer. It gives you access to all my premium video courses, monthly Java Persistence News, monthly coding problems, and regular expert sessions.

Join the Persistence Hub!

The repository pattern is extremely popular. In its modern interpretation, it abstracts the data store and enables your business logic to define read and write operations on a logical level. It does that by providing a set of methods to read, persist, update and remove an entity from the underlying data store.

Table of Contents
Old vs. modern interpretation
Explaining the repository pattern
Implementing the repository pattern
Defining the repository interface
Implementing the repository with JPA and Hibernate
Conclusion
Old vs. modern interpretation
If you read Patterns of Enterprise Application Architecture by Martin Fowler et al., you will recognize the difference to the initial goal of the repository pattern. Its main goal was the abstraction of the database access code. JPA already provides this abstraction. So, there is no need for another layer that provides the same functionality.

That’s why the new interpretation of the pattern now provides a higher level of abstraction and hides all specifics of the data store. That enables you to replace a data store with a completely different one, e.g., a relational database with a NoSQL database. But what’s even more important, all database access methods for an entity are defined in the same repository and not in different parts of the business logic. That makes the implementation of your business logic and reusing queries or other database operations much easier.

Explaining the repository pattern
The repository pattern is pretty simple. An interface defines the repository with all logical read and write operations for a specific entity. You can see an example of such a repository interface in the diagram.

The interface gets implemented by one or more classes that provide data store specific implementations of each interface method.


In my experience, it only rarely happens that you need to support more than one data store. So, you could argue that this pattern creates an overengineered persistence layer. But the interface abstraction also enables frameworks to generate huge parts of the required code.

Implementing the repository pattern
In most enterprise projects, you only need to define the repository interfaces. Spring Data JPA and Apache DeltaSpike Data can generate standard repository implementations for you. You just need to provide your own implementation, if your implementation gets especially complex. I will show you more of that in the following articles of this series.

But for now, let’s implement the repository pattern without any frameworks. That makes the pattern easier to understand and highlights the benefits of frameworks that generate repetitive parts of the implementation.

Defining the repository interface
Let’s implement the same BookRepository interface as I showed you in the diagram. It defines 4 methods that you can use to:

save a new or changed entity (Please keep in mind that Hibernate detects and persists all changes of managed entities automatically. So, you don’t need to call the save method after you changed any entity attributes),
delete an entity,
find an entity by its primary key and
find an entity by its title.
1
2
3
4
5
6
7
8
9
10
11
12
13
14
package org.thoughts.on.java.repository;
 
import org.thoughts.on.java.model.Book;
 
public interface BookRepository {
 
    Book getBookById(Long id);
 
    Book getBookByTitle(String title);
 
    Book saveBook(Book b);
     
    void deleteBook(Book b);
}
Implementing the repository with JPA and Hibernate
In the next step, you can implement the BookRepository interface. In this example, I only create a simple JPA-based implementation, that doesn’t rely on any other frameworks.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
package org.thoughts.on.java.repository;
 
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
 
import org.thoughts.on.java.model.Book;
 
public class BookRepositoryImpl implements BookRepository {
 
    private EntityManager em;
     
    public BookRepositoryImpl(EntityManager em) {
        this.em = em;
    }
     
    @Override
    public Book getBookById(Long id) {
        return em.find(Book.class, id);
    }
 
    @Override
    public Book getBookByTitle(String title) {
        TypedQuery<Book> q = em.createQuery("SELECT b FROM Book b WHERE b.title = :title", Book.class);
        q.setParameter("title", title);
        return q.getSingleResult();
    }
 
    @Override
    public Book saveBook(Book b) {
        if (b.getId() == null) {
            em.persist(b);
        } else {
            b = em.merge(b);
        }
        return b;
    }
 
    @Override
    public void deleteBook(Book b) {
        if (em.contains(b)) {
            em.remove(b);
        } else {
            em.merge(b);
        }
    }
}
If you ever called a JPQL query or persisted an entity in your business layer, the code of my repository implementation should look familiar. There is no big difference between implementing these operations in your business code or as part of a repository implementation.

In this example, the only noticeable difference is the implementation of the saveBook(Book b) method. You can call this method to persist a new entity or to merge an existing one. So, you need to detect if the method got called with a new or an existing entity. In this example, I let Hibernate generate the primary key values. So, the id attribute of all new entities should be null. If it isn’t null, it should be an existing entity which then gets merged into the persistence context.

Conclusion
The repository pattern is one of the most popular Java persistence patterns. It provides 2 main benefits:

The pattern abstracts the data store and enables you to replace your data store without changing your business code.
The repository improves the reusability of your persistence code, especially your queries, by encouraging you to implement all persistence operations in one place. That makes them easy to find and to reuse.
The implementation of the repository pattern is relatively simple. You need an interface that defines the persistence operations on a logical level. This interface gets implemented by one or more data store specific classes.

