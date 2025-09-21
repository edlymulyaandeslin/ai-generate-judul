<?php

test('register success', function () {
    $response = $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@gmail.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertRedirect('/');

    $this->assertDatabaseHas('users', [
        'email' => 'test@gmail.com',
    ]);
});

test('register validation error', function () {
    $response = $this->post('/register', [
        'name' => '',
        'email' => 'invalid-email',
        'password' => 'short',
        'password_confirmation' => 'mismatch',
    ]);

    $response->assertSessionHasErrors(['name', 'email', 'password']);
});